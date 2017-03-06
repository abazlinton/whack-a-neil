import React from 'react'

const Head = (props) => {

	let containerStyle = {
		left: props.style.left,
		top: props.baseTop,
		width: props.style.width,
		height: props.style.height,
		position: "fixed",
		zIndex: 9,
		background: "white"
  } 
  
    return (
    	<div>
    		<div 
          className="container"
          style={containerStyle}
        >
        </div>
	        <img
	        	className={props.className}
	        	onClick={props.onWhac}
	        	style={props.style}
            id={props.id}
	        />

        
       </div>
    );

}


export default Head;