import React, { Component } from 'react'

class Head extends Component {
  
	constructor(props) {
		super(props)
		this.state = {
			style: style,
			className: ""
		}

		if (props.height) {
			this.state.style.height = props.height
			this.state.style.left = props.left

		}
		this.pop()
		this.state.onWhack = props.onWhack

	}

	pop(){
		this.state.className = "grow"
	}

  render() {
    return (
      <div>
        <img
        	className={this.state.className}
        	onClick={this.state.onWhack}
        	src="neil.jpg"
        	style={this.state.style}
        />
      </div>
    );
  }
}

let style = {
	position: "fixed",
	width: 200,
	height: 259,
	top: 0,
	left: 0,
	zIndex: 0,
	userSelect: "none"
}



export default Head;