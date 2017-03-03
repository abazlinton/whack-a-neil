import React, { Component } from 'react';
import Head from './Head'
import Score from './Score'

import Circle from './Circle'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0
    }  

    this.onWhac = this.onWhac.bind(this)
  }

  render() {
    return (
      <div>
        <Head
          onWhac={this.onWhac}
          width={200}
          height={259}
          top={0}
        >
        </Head>

       <Score 
        score={this.state.score}
        left={210}
        />

      </div>
      );
  }

  onWhac() {
    const newScore = this.state.score + 1
    const newState = Object.assign({}, this.state, {score: newScore});
    this.setState(newState)
  }

}

export default App;
