import React, { Component } from 'react';

class DinoHeader extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="DinoHeader" >
        <header className="flex flex-row items-baseline mr-4">
          <h1 className="mr-4">Talkasaurus</h1>
          <h2 className="mr-4">by Bill Kremer</h2>
        </header>
      </div>
    );
  }
}

export default DinoHeader;