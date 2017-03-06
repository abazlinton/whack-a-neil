import React from 'react'

const Score = function(props) {

	const style = {
		left: props.left,
		fontSize: 30, 
		position: "fixed",
		userSelect: "none"
	}

	return(
		<div
			id="score"
			style={style}
		>
			
			SCORE: {props.score}
		</div>
	)
}

export default Score
