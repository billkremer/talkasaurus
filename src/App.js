import './App.css';
import DinoHeader from './dino/DinoHeader'
import DinoText from './dino/DinoText'
import DinoMenu from './dino/DinoMenu'
import DinoMain from './dino/DinoMain'

import React, { Component } from 'react';

import {dinoConfig} from './dino/DinoConfig';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDino: dinoConfig.dinos[0].name,
      currentVoice: dinoConfig.voices[0].voiceName,
      speaking: false,
      boundary: '',
      allVoices: [],

    }
    this.handleDinoChange = this.handleDinoChange.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleSpeaking = this.handleSpeaking.bind(this);
    this.handleBoundary = this.handleBoundary.bind(this);
    this.gotVoices = this.gotVoices.bind(this);

  }

  componentDidMount() {
    this.logwelcome();
  }

  handleDinoChange(currentDino) {
    this.setState({currentDino: currentDino});
  }
  handleVoiceChange(currentVoice) {
    this.setState({ currentVoice: currentVoice });
  }
  handleSpeaking(speaking) {
    this.setState({ speaking: speaking });
  }
  handleBoundary(boundary) {
    this.setState({ boundary: boundary });
  }
  gotVoices(voices) {
    this.setState({ allVoices: voices });



    // let x = voices.find(({name}) => name === this.state.currentVoice)

    // this.setState({currentVoice: })
  }


  render() {
    return (
      <div className="Appnew" >
        <DinoHeader/>
        <DinoText        
          voiceName="Alex"
          currentVoice={this.state.currentVoice}
          isSpeaking={this.handleSpeaking}
          onBoundary={this.handleBoundary}
          gotVoices={this.gotVoices}
        ></DinoText>
        <div className="md:container flex flex-row">
          <DinoMenu
            onDinoChange={this.handleDinoChange}
            onVoiceChange={this.handleVoiceChange}
            dinos={dinoConfig.dinos}
            voices={dinoConfig.voices}
          />
          <DinoMain
            dino={this.state.currentDino}
            speaking={this.state.speaking}
            boundary={this.state.boundary}
          />
        </div>
      </div>
    );
  }

  logwelcome() {
    let mm1style = 'border-radius: 5px 30px 0 0; background: #ffd166; color: black';
    let mm2style = 'background: #ffd166; color: black';
    let mm3style = 'border-bottom-left-radius: 5px; background: #ffd166; color: black';
    let mm4style = 'border-radius: 0 5px 5px 0; background: #2c3e50; color: #ffd166';
    let mm5style = 'color: #ffd166';

    let mm1 = " ╔╦╗┌─┐┬  ┬┌─┌─┐┌─┐┌─┐┬ ┬┬─┐┬ ┬┌─┐   \n";
    let mm2 = "  ║ ├─┤│  ├┴┐├─┤└─┐├─┤│ │├┬┘│ │└─┐   \n"
    let mm3 = "  ╩ ┴ ┴┴─┘┴ ┴┴ ┴└─┘┴ ┴└─┘┴└─└─┘└─┘ 🦕";
    let mm4 = " by Bill Kremer \n"
    let mm5 = "https://github.com/billkremer/talkasaurus "
    console.log("Listen up!\n%c" + mm1 + '%c' + mm2 + '%c' + mm3 + '%c' + mm4 + '%c' + mm5, mm1style, mm2style, mm3style, mm4style, mm5style);

    console.log(Date()); 
    // TODO remove date for prod
  }

}

