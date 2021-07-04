import './App.css';
import DinoHeader from './dino/DinoHeader'
import DinoText from './dino/DinoText'
import DinoMenu from './dino/DinoMenu'
import DinoMain from './dino/DinoMain'

import React, { Component } from 'react';



export default class App extends Component {


  componentDidMount() {
    this.logwelcome();

  }



  render() {
    let date = Date();
    return (
      <div className="Appnew" >
        <DinoHeader
          date={date.substr(0, 15).trim()}
        />
        <DinoText
          name="Alex" ></DinoText>
        <div className="md:container flex flex-row">
          <DinoMenu></DinoMenu>
          <DinoMain></DinoMain>
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

    console.log(Date()); // TODO remove for prod
  }

}

