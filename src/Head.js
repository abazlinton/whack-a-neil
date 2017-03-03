import React, { Component } from 'react'

class Head extends Component {
  
	constructor(props) {
		super(props)
		this.state = {
			style: style,
			className: "",
			container: {style: containerStyle}
		}
		this.state.style.height = props.height
		this.state.style.width = props.width
		this.state.style.left = props.left
		this.state.style.top = props.top
		this.state.container.style.height = props.height
		this.state.container.style.width = props.width
		this.state.container.style.top = props.height + props.top
		
		this.pop()
		this.state.onWhac = props.onWhac
	}

	pop(){
		this.state.className = "grow"
	}

  render() {
    return (
    	<div>
    		<div 
          className="container"
          style={this.state.container.style}
        >
        </div>
        <img
        	className={this.state.className}
        	onClick={this.state.onWhac}
        	src="neil.jpg"
        	style={this.state.style}
        />
       </div>
    );
  }
}

let style = {
	position: "fixed",
	zIndex: 0,
	userSelect: "none"
}

let containerStyle = {
	position: "fixed",
  zIndex: 1,
  background: "white"
}



export default Head;