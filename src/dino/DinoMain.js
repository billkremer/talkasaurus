import React, { Component } from 'react';
import './DinoMain.css';
import Tyrannosaurus from './../img/Tyrannosaurus.js';
import Triceratops from './../img/Triceratops.js';
import Sauropod from './../img/Sauropod.js';

export default class DinoMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      intervalID: '',
      dinoeye: {},
      dinomouth: {},

    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.speaking && (this.props.boundary != prevProps.boundary)) {
      this.mouthTalk();
    }

    if (this.props.dino != prevProps.dino) {
      window.clearInterval(this.state.intervalID);

      setTimeout(() => {
        this.setState({
          dinoeye: document.querySelector('#' + this.props.dino + ' #closed-eye'),
          dinomouth: document.querySelector('#' + this.props.dino + ' #mouth-group'),
        });
        this.eyeBlink();
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
    window.clearInterval(this.state.intervalID);
  }

  eyeBlink() {
    // find className closed-eye and toggle display: none; for 500ms 
    // randomly every 2500 to 6000 ms
    let minTime = 4000;
    let maxTime = 7500; //ms

    let rand = 0;

    let intID = window.setInterval(() => {
      rand = Math.floor(Math.random() * (maxTime - minTime + 1));

      setTimeout(() => {
        this.state.dinoeye.classList.toggle("closed-eye");
      }, rand);
      setTimeout(() => {
        this.state.dinoeye.classList.toggle("closed-eye");
      }, rand + 250);

    }, minTime )

    this.setState({ intervalID: intID });



  };


  mouthTalk() {
    this.state.dinomouth.classList.toggle("hidden");
    setTimeout(() => {
      this.state.dinomouth.classList.toggle("hidden");
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
      <div className="DinoMain flex-grow" >
        {currentDino}
      </div>
    ) 
  }
}