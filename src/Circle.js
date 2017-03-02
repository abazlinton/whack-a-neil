import React, { Component } from 'react'

class Circle extends Component {
  
	constructor(props) {
		super(props)
		this.state = {
			style:  {
				position: "fixed",
				borderRadius: 100,
				width: 200,
				height: 200,
				left: 400,
				background: "dodgerblue"
			}
		}
		
		if (props.radius) {
			this.state.style.width = props.radius * 2
			this.state.style.height = props.radius * 2
			this.state.style.borderRadius = props.radius
			this.state.style.background = props.color
		}
	}

  render() {
    return (
      <div style={this.state.style}>
     	
      </div>
    );
  }
}




export default Circle;