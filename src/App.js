import React, { Component } from 'react';
import Head from './Head'
import Score from './Score'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      heads: []
    }  

    this.ticks = 0

    this.headWidth = props.gridWidth / 3
    const headsGap = 50
    let baseTop = 100
    const height = 100

    let i = 0

    for (let x=0; x<3; x++){
      for (let y=0; y<3; y++){
        this.state.heads.push({
          left: (x * (this.headWidth + headsGap) + 250),
          key: i,
          baseTop: baseTop + (baseTop * (2 * y)),
          top: baseTop + (baseTop * (2 * y)),
          goalTop: baseTop + (baseTop * (2 * y)) - height,
          speed: Math.floor((Math.random() * 5) + 2),
          id: i
        })
        i++
      }
    }

    this.onWhac = this.onWhac.bind(this)
    this.onTick = this.onTick.bind(this)
    const fps = 30
    setInterval(this.onTick, 1000 / fps)
    
  }

  render() {
    return (
      <div>
        <div></div>
        {this.state.heads.map( head => {
          return <Head
            className="head"
            onWhac={this.onWhac}
            baseTop={head.baseTop}
            style={{
              width: this.headWidth,
              height: 100,
              top: head.top,
              left: head.left,
              position: "fixed",
              zIndex: 1,
              userSelect: "none"
            }}
            key={head.key}
            id={head.id}
            >
          </Head>
        })}
       <Score 
        score={this.state.score}
        left={20}
        />
      

      </div>
      );
  }

  onWhac(e) {
    const newScore = this.state.score + Math.round(this.state.heads[e.target.id].speed)
    const newState = Object.assign({}, this.state, {score: newScore});
    this.setState(newState)
  }

  onTick(){
    this.ticks++
    this.animateHeads()
  }

  animateHeads(){
    let newHeads = null
    this.state.heads.forEach( (head, index) => {
      
      if (head.top !== head.goalTop ) {
        let increment = 0
        if (head.top < head.goalTop) {
          increment = head.speed
        } else {
          increment = head.speed * - 1
        }
        newHeads = this.state.heads.slice()
        let newTop = head.top + increment

        // if goal is 500 and get to 501 we need to cap otherwise if speed is say 2 will flip between 499, 501
        if ( (newTop > head.goalTop && increment > 0) || (newTop < head.goalTop && increment < 0) ) {
          newTop = head.goalTop
        }

        newHeads[index].top = newTop

        //bounce back to original position once hit goal + faster
        if (newHeads[index].top == head.goalTop){
          newHeads[index].goalTop = newHeads[index].baseTop
          newHeads[index].speed = newHeads[index].speed * 1.3
        }
      }
    })

    if (newHeads) {
      const newState = Object.assign({}, this.state, {heads: newHeads});
      this.setState(newState)
    }
  }
  
}

export default App;
