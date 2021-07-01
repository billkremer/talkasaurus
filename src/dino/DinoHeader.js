// import logo from './logo.svg';
// import DinoHeader from './dino/DinoHeader'
// import DinoMenu from './dino/DinoMenu'
// import DinoMain from './dino/DinoMain'
import React, { Component } from 'react';



class DinoHeader extends Component {


  componentDidMount() {
    // console.log('mounted tha header')


  }





  render() {
    return (
      <div className="DinoHeader" >
        <header className="flex flex-row items-baseline mr-4">
          <h1 className="mr-4">Talkasaurus</h1>
          <h2 className="mr-4">by Bill Kremer</h2>
          <h2 className=""> {this.props.date}</h2>
        </header>
      </div>
    );
  }

}




export default DinoHeader;
