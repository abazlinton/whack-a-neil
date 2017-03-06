import React from 'react'

const Head = (props) => {

  let hiderStyle = {
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
          className="hider"
          style={hiderStyle}
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