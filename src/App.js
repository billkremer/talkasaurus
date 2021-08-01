import React, { Component } from 'react';

import DinoHeader from './dino/DinoHeader'
import DinoText from './dino/DinoText'
import DinoMenu from './dino/DinoMenu'
import DinoMain from './dino/DinoMain'
import {dinoConfig} from './dino/DinoConfig';

import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDino: dinoConfig.dinos[0].name,
      currentVoice: dinoConfig.voices[0],
      speaking: false,
      boundary: '',
      allVoices: [],

    }
    this.handleDinoChange = this.handleDinoChange.bind(this);
    this.handleVoiceChange = this.handleVoiceChange.bind(this);
    this.handleSpeaking = this.handleSpeaking.bind(this);
    this.handleBoundary = this.handleBoundary.bind(this);
    this.gotVoices = this.gotVoices.bind(this);
    this.matchVoiceData = this.matchVoiceData.bind(this);

  }

  componentDidMount() {
    this.logWelcome();

  }

  matchVoiceData(currentDinoVoiceName) {
    let currentVoiceConfig = dinoConfig.voices.find(({ dinoVoiceName }) => dinoVoiceName === currentDinoVoiceName);
    let currentVoiceInfo = {};
    if (this.state.allVoices.length !== 0) {
      currentVoiceInfo = this.state.allVoices.find(({ name }) => name === currentVoiceConfig.voiceName);
    } // if there's data, we'll add it, otherwise.

    // need to convert data from SpeechSynthesisVoice Object to normal object to add together
    this.setState({ currentVoice: { 
        ...currentVoiceConfig, 
        default: currentVoiceInfo.default,
        lang: currentVoiceInfo.lang,
        localService: currentVoiceInfo.localService,
        name: currentVoiceInfo.name,
        voiceURI: currentVoiceInfo.voiceURI,
      } 
    });

  }

  handleDinoChange(currentDino) {
    this.setState({currentDino: currentDino});
  }

  handleVoiceChange(currentDinoVoiceName) {
    // currentDinoVoiceName is the dinoVoiceName of the voice
      this.matchVoiceData(currentDinoVoiceName);
  }

  handleSpeaking(speaking) {
    this.setState({ speaking: speaking });
  }

  handleBoundary(boundary) {
    this.setState({ boundary: boundary });
  }

  gotVoices(voices) {
    this.setState({ allVoices: voices });
    this.matchVoiceData(this.state.currentVoice.dinoVoiceName);
  }


  render() {
    return (
      <div className="Appnew" >
        <DinoHeader/>
        <DinoText        
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

  logWelcome() {
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
  }
}

