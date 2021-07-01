
import React, { Component } from 'react';
import './DinoMenu.css';



 class DinoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinoChecked: "Triceratops",
      voiceChecked: "0",
      dinos: [
        {
          name: "Triceratops",
        },
        {
          name: "Tyrannosaurus",
        },
        {
          name: "Sauropod"
        }
      ],
        
      voices: [
        { 
          dinoName: "Abby",
          lang: "en-US",
          name: "Alex",
          rate: 0.6,
          pitch: 1.4,
        },
        {
          dinoName: "Benny",
          lang: "en-US",
          name: "Dave",
          rate: 0.6,
          pitch: 1.4, 
        },
        {
          dinoName: "Carl",
          lang: "en-US",
          name: "Samantha",
          rate: 0.6,
          pitch: 1.4, 
        },
      ],

    };
    this.onChangeDinoValue = this.onChangeDinoValue.bind(this);
    this.onChangeVoiceValue = this.onChangeVoiceValue.bind(this);
  }

  componentDidMount() {
    // console.log('mounted tha menu')


  }

  onChangeDinoValue(event) {
    this.setState({
      dinoChecked: event.target.value
    });
  }
  onChangeVoiceValue(event) {
    // the index of the voice
    this.setState({
      voiceChecked: event.target.value
    });
  }

  render() {
    const buttonClassName = "w-full px-2 py-2 hover:bg-red-dark border-b border-almostblack focus:font-bold text-md text-almostblack block"

    let dinoMenu = this.state.dinos.map((item, index) => (

      <div className="dino-button" key={index}>
        <label htmlFor={"dino-" + item.name} >

          <input type="radio" id={"dino-" + item.name} name="dino" value={item.name} className="hidden"
            checked={this.state.dinoChecked === item.name }
            onChange={this.onChangeDinoValue} />
          <div
            className={buttonClassName} >
            {item.name}
              </div>
        </label>
      </div>

    ));

    let voiceMenu = this.state.voices.map((item, index) => (

      <div className="dino-button" key={index}>
        <label htmlFor={"voice-" + item.dinoName} >

          <input type="radio" id={"voice-" + item.dinoName} name="voice" value={index} className="hidden"
            checked={this.state.voiceChecked === index.toString() }
            onChange={this.onChangeVoiceValue} />
          <div
            className={buttonClassName} >
            {item.dinoName}
              </div>
        </label>
      </div>

    ));

    return (
      <div className="DinoMenu flex-shrink-0 mr-4" >
        <h2>Dinosaurs</h2>
        <div className="Dinos dino-button-group bg-red rounded-lg border-4"  >
          { dinoMenu }
        </div>
        <br/>
        <h2>Voices</h2>
        <div className="Voices dino-button-group bg-red rounded-lg border-4"  >
          {voiceMenu }
        </div>
      </div>
    );
  }

}

export default DinoMenu

