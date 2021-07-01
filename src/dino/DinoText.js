
import React, { Component } from 'react';
// import './DinoMenu.css';



export default class DinoText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      rows: 2,
      minRows: 2,
      maxRows: 10,
    };
  }




  componentDidMount() {

  }

  handleClick = () => {
    console.log('click');
    console.log(this.state.value);
    this.speak(this.state.value);


  }

  speak = (something) => {
    // lang = {props.voice.lang}
    // name = {props.voice.name}
    // rate = {props.voice.rate}
    // pitch = {props.voice.pitch}




    console.log(something + "asdf");
  }

  handleChange = (event) => {
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
      value: event.target.value,
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
              value={this.state.value}
              onChange={this.handleChange}
              className="flex-grow m-1 mr-2 p-1 border-yellow text-md  text-almostblack shadow-sm focus:border-blue ring-4 ring-yellow focus:ring-opacity-70 resize-none"
              placeholder="grrr..." 
              autoFocus 
            />
            <button className="w-1/6 flex-none bg-yellow hover:bg-yellow-dark border-almostblack hover:border-blue text-md border-4 text-almostblack py-1 px-2 rounded" 
            type="button"
            onClick={this.handleClick}
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


