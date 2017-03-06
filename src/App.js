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

    const headsWidth = props.gridWidth / 3
    const headsGap = 50
    const baseTop = 100
    const headsHeight = 100

    this.initializeHeads(this.state.heads, baseTop, headsGap, headsWidth, headsHeight)

    this.onWhac = this.onWhac.bind(this)
    this.onTick = this.onTick.bind(this)
    const fps = 30
    setInterval(this.onTick, 1000 / fps)
    
  }

  initializeHeads(heads, baseTop, gap, width, height){
    let i = 0
    for (let x=0; x<3; x++){
      for (let y=0; y<3; y++){
        heads.push({
          key: i,
          baseTop: baseTop + (baseTop * (2 * y)),
          goalTop: baseTop + (baseTop * (2 * y)) - height,
          speed: Math.floor((Math.random() * 5) + 2),
          id: i,
          style: {
            width: width,
            height: height,
            left: (x * (width + gap) + 250),
            top: baseTop + (baseTop * (2 * y)),
            position: "fixed",
            zIndex: 1,
            userSelect: "none"
          }
        })
        i++
      }
    }

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
            style={head.style}
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

  getSpeed(headId) {
    return this.state.heads[headId].speed
  }

  onWhac(e) {
    this.increaseScore( Math.round( this.getSpeed(e.target.id) ) )
  }

  increaseScore(increase){
    const newScore = this.state.score + increase
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
      
      if (head.style.top !== head.goalTop ) {
        let increment = 0
        if (head.style.top < head.goalTop) {
          increment = head.speed
        } else {
          increment = head.speed * - 1
        }
        newHeads = this.state.heads.slice()
        let newTop = head.style.top + increment

        // if goal is 500 and get to 501 we need to cap otherwise if speed is say 2 will flip between 499, 501
        if ( (newTop > head.goalTop && increment > 0) || (newTop < head.goalTop && increment < 0) ) {
          newTop = head.goalTop
        }

        newHeads[index].style.top = newTop

        //bounce back to original position once hit goal + faster
        if (newHeads[index].style.top === head.goalTop){
          newHeads[index].goalTop = newHeads[index].baseTop
          newHeads[index].speed *= 1.3
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
