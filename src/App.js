import React, { Component } from 'react';
import Head from './Head'
import Score from './Score'
import {Motion, spring} from 'react-motion';



import './App.css';

const HEADS = {
  NEIL: {src: "neil.jpg"}
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      heads: [],
      open: false,
      target: 200
    }  

    for (let i=0; i<props.noOfHeads; i++) {
      this.state.heads.push({
        left: i * 200,
        type: HEADS.NEIL,
        key: i
      })
    }

    this.onWhac = this.onWhac.bind(this)
    this.scoreClick = this.scoreClick.bind(this)
  }


  render() {
    console.log("render called")
    return (
      <div>

          {this.state.heads.map( head => {
            return (
              <Motion style={{y: spring(this.state.open ? this.state.target : 200)}}
                key={head.key}
                config="stiff"
                onRest={() => {

                  const newState = Object.assign({}, this.state, {open: true, target: 200});  
                  this.setState(newState)
                }}
              >
              {({y}) =>
                {
                return (
                <Head
                  onWhac={this.onWhac}
                  className="head"
                  // width={200}
                  // height={259}
                  // top={200}
                  // key={head.key}
                  // left={head.left}

                  // src={head.type.src}
                  style={{
                    position: "fixed",
                    WebkitTransform: `translate3d(0, ${y}px, 0)`,
                    transform: `translate3d(0, ${y}px, 0)`,
                    left: `${head.left}px`,
                    // src: `${head.type.src}`
                  }}
                >
                </Head>
                )}
              }
             </Motion> 
            )

        })}
      
      <Score 
      score={this.state.score}
      left={210}
      
      />
      <button
        onClick={this.scoreClick}>
      </button>

      </div>
      );
  }

  scoreClick(){
    const oldTarget = this.state.target;
    const newTarget = oldTarget + 10;
    const newState = Object.assign({}, this.state, {open: true, target: newTarget});  
    this.setState(newState)
  }

  onWhac() {
    const newScore = this.state.score + 1
    let newHeads = this.state.heads.concat({
      left: 3 * 200,
      type: HEADS.NEIL,
      key: 3
    })
    const newState = Object.assign({}, this.state, {score: newScore, heads: newHeads});  
    this.setState(newState)
  }

}

export default App;
