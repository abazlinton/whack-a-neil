import React, { Component } from 'react';
import Head from './Head'
import Score from './Score'

import Circle from './Circle'

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      heads: []
    }  

    const HEADS = {
      NEIL: {src: "neil.jpg"}
    }

    for (let i=0; i<props.noOfHeads; i++) {
      this.state.heads.push({
        left: i * 200,
        type: HEADS.NEIL,
        key: i
      })
    }

    this.onWhac = this.onWhac.bind(this)
  }

  render() {
    return (
      <div>
        {this.state.heads.map( head => {
          return <Head
            onWhac={this.onWhac}
            width={200}
            height={259}
            top={259}
            key={head.key}
            left={head.left}
            src={head.type.src}
            >
          </Head>
        })}
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
