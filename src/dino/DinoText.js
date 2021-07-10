import React, { Component } from 'react';
export default class DinoText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textToUtter: '',
      rows: 2,
      minRows: 2,
      maxRows: 10,
      synth: window.speechSynthesis,
      currentVoice: {},
      allVoices: null,
      // speaking: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.getVoices = this.getVoices.bind(this);
    this.speak = this.speak.bind(this);

  }

  componentDidMount() {
    setTimeout(() => { this.getVoices(); }, 1000);

  }

  getVoices() {
    if (this.state.allVoices === null) {
      let av = this.state.synth.getVoices();
      let avFiltered = av.filter(({ lang }) => (lang.includes("en-US") ));

      this.props.gotVoices(avFiltered);

      this.setState({
        allVoices: avFiltered,
      });
    }
  }

  speak() {
    this.props.isSpeaking(true);

    if (this.state.synth.speaking) {
      console.error('already speaking');
      return;
    } else if (this.state.allVoices === null) {
      this.getVoices();
      console.error('voices not loaded');
      return;
    }
    

    let textToUtter = this.state.textToUtter;
    if (textToUtter === '') {
      textToUtter = 'girr, type something in the box for me to say!'
    } 

    let utterThis = new SpeechSynthesisUtterance(textToUtter);


    utterThis.onstart = function (event) {
      this.props.isSpeaking(true);
      // TODO this should stop the animation
    }.bind(this);

    utterThis.onend = function (event) {
      this.props.isSpeaking(false);
      // TODO this should stop the animation
    }.bind(this);

    utterThis.onboundary = function (event) {
      this.props.onBoundary(event.elapsedTime);
    }.bind(this);
      // TODO this should trigger animation again


    utterThis.onerror = function (event) {
      console.error('SpeechSynthesisUtterance.onerror');
    }

    utterThis.voice = this.state.allVoices.find(({ name }) => name === this.props.voiceName     )

    // lang = {props.voice.lang}
    // name = {props.voice.name}
    // rate = {props.voice.rate}
    // pitch = {props.voice.pitch}

    utterThis.lang = "en-US";
    utterThis.pitch = 0.6;
    utterThis.rate = 1.4;
    // console.log(utterThis);
    this.state.synth.speak(utterThis);

  }

  handleChange(event) {
    this.getVoices();

    // from https://codepen.io/JaKto/pen/qeBpZM

    const textareaLineHeight = 24;
    const { minRows, maxRows } = this.state;

    const previousRows = event.target.rows;
    event.target.rows = minRows; // reset number of rows in textarea 

    const currentRows = Math.floor(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    this.setState({
      textToUtter: event.target.value,
      rows: currentRows < maxRows ? currentRows : maxRows,
    });
  };


  render() {
    return (
      <div className="DinoText " >
        <label className="inline">
          <span className="w-full text-left">Tell the dinosaur what to say:</span>
          <div className="bg-white rounded-md p-2 flex flex-row items-center">
            <textarea
              rows={this.state.rows}
              value={this.state.textToUtter}
              onChange={this.handleChange}
              className="flex-grow m-1 mr-2 p-1 border-yellow text-md  text-almostblack shadow-sm focus:border-blue ring-4 ring-yellow focus:ring-opacity-70 resize-none"
              placeholder="grrr..." 
              autoFocus 
            />
            <button className="w-1/6 flex-none bg-yellow hover:bg-yellow-dark border-almostblack hover:border-blue text-md border-4 text-almostblack py-1 px-2 rounded" 
            type="button"
            onClick={this.speak}
            >
              Talk!
              </button>
          </div>
        </label>
        <br/>
      </div>
    );
  }

}


