import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Head = (props) => {

	let style = {
		position: "fixed",
		zIndex: 0,
		userSelect: "none",
		left: props.left,
		top: props.top,
		width: props.width,
		height: props.height
	}


	let containerStyle = {
		left: props.left,
		top: props.top,
		width: props.width,
		height: props.height,
		position: "fixed",
		zIndex: -1,
		background: "white"
}
  
 
    return (
    	<div>
    		<div 
          className="container"
          style={containerStyle}
        >
        </div>
        <ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={7000} transitionLeaveTimeout={700}>
	        <img
	        	className={props.className}
	        	onClick={props.onWhac}
	        	src={props.src}
	        	style={style}
	        />

        </ReactCSSTransitionGroup>
        
       </div>
    );

}


export default Head;