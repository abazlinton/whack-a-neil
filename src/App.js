import React, { Component } from 'react';
import Head from './Head'

import Circle from './Circle'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }  

    this.onWhack = this.onWhack.bind(this)
  }

  render() {
    return (
      <div>
        <div 
          className="container"
        >
        </div>

        <Head
          onWhack={this.onWhack}
        >
        </Head>
       
        <h1
          id="whacks"
        >
        </h1>

      </div>
      );
  }

  onWhack() {
    this.state.score += 1
    const whacks = document.getElementById("whacks")
    whacks.innerText = this.state.score + " WHACKS!"
  }

}

export default App;
