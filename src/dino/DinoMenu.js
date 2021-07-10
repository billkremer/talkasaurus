import React, { Component } from 'react';
import './DinoMenu.css';

class DinoMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinoChecked: this.props.dinos[0].name,
      voiceChecked: "Abby",
        
    };
    this.onChangeDinoValue = this.onChangeDinoValue.bind(this);
    this.onChangeVoiceValue = this.onChangeVoiceValue.bind(this);
  }

  componentDidMount() {

  }

  onChangeDinoValue(event) {
    // the name of the dino
    this.setState({
      dinoChecked: event.target.value
    });
    this.props.onDinoChange(event.target.value);
  }

  onChangeVoiceValue(event) {
    // the dinoName of the voice
    this.setState({
      voiceChecked: event.target.value
    });
    this.props.onVoiceChange(event.target.value);
  }

  // getVoiceDataByDinoName(itemName) {
  //   return this.props.voices.find( ({dinoName}) => dinoName === itemName );
  // }

  render() {
    const buttonClassName = "w-full px-2 py-2 hover:bg-red-dark border-b border-almostblack focus:font-bold text-md text-almostblack block"

    let dinoMenu = this.props.dinos.map((item, index) => (

      <div className="dino-button" key={index + item.name}>
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

    let voiceMenu = this.props.voices.map((item, index) => (

      <div className="dino-button" key={index + item.dinoName}>
        <label htmlFor={"voice-" + item.dinoName} >

          <input type="radio" id={"voice-" + item.dinoName} name="voice" value={item.dinoName} className="hidden"
            checked={this.state.voiceChecked === item.dinoName }
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
          { voiceMenu }
        </div>
      </div>
    );
  }

}

export default DinoMenu

