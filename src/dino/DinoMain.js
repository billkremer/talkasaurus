import React, { Component } from 'react';
import './DinoMain.css';
import Tyrannosaurus from './../img/Tyrannosaurus.js';
import Triceratops from './../img/Triceratops.js';
import Sauropod from './../img/Sauropod.js';

export default class DinoMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalIDs: [],
      dinoeye: {},
      dinomouth: {},

    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.speaking && (this.props.boundary.toString() !== prevProps.boundary.toString())) {
      this.mouthTalk();
    }

    if (this.props.dino !== prevProps.dino) {
      for (let i = 0; i < this.state.intervalIDs.length; i++) {
        window.clearInterval(this.state.intervalIDs[i]);
      }
      
      setTimeout(() => {
        this.setState({
          dinoeye: document.querySelector('#' + this.props.dino + ' #closed-eye'),
          dinomouth: document.querySelector('#' + this.props.dino + ' #mouth-group'),
        });
        this.eyeBlink();
        this.setState({ intervalIDs: this.state.intervalIDs.slice(-5),});
      }, 4000);

    }

  }

  componentDidMount() {

    setTimeout(() => {
      this.setState({
      dinoeye: document.querySelector('#' + this.props.dino + ' #closed-eye'),
      dinomouth: document.querySelector('#' + this.props.dino + ' #mouth-group'),
    });
      this.eyeBlink();
    }, 4000);

  }

  componentWillUnmount() {
    for (let i = 0; i < this.state.intervalIDs.length; i++) {
      window.clearInterval(this.state.intervalIDs[i]);
    }
  }

  eyeBlink() {
    // find className closed-eye and toggle display: none; for 250ms 
    // randomly every 7 - 12 seconds
    let minTime = 7000;
    let maxTime = 12000; //ms
    let rand = 0;

    let intvalIDs = this.state.intervalIDs;

    let intID = window.setInterval(() => {
      rand = Math.floor(Math.random() * (maxTime - minTime + 1));
      setTimeout(() => {
        this.state.dinoeye.classList.remove("closed-eye");
      }, rand);
      setTimeout(() => {
        this.state.dinoeye.classList.add("closed-eye");
      }, rand + 250);

    }, minTime )

    intvalIDs.push(intID);
    this.setState({ intervalIDs: intvalIDs });
  };


  mouthTalk() {
    this.state.dinomouth.classList.add("hidden");
    setTimeout(() => {
      this.state.dinomouth.classList.remove("hidden");
    }, 200);
  }

  render() {
    let currentDino;
    if (this.props.dino === "Tyrannosaurus") {
      currentDino = <Tyrannosaurus />
    } else if (this.props.dino === "Triceratops") {
      currentDino = <Triceratops />
    } else if (this.props.dino === "Sauropod") {
      currentDino = <Sauropod />
    }
    return (
      <div className="DinoMain flex-grow relative" >
        {currentDino}
      </div>
    ) 
  }
}