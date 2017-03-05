import React, { Component } from 'react'
import { VelocityComponent } from 'velocity-react'
import {Motion, spring} from 'react-motion';

const Head = (props) => {



	let style = props.style
	


	let hiderStyle = {
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
          className="hider"
          style={hiderStyle}
        >
        </div>

       <img
    		className={props.className}
    		onClick={props.onWhac}
    		src={props.src}
    		style={style}
    		key={style.key}
    	/>
          
 
        
       </div>
    );

}

export default Head;