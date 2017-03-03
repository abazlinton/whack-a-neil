import React from 'react'

const Score = function(props) {

	const style = {left: props.left}

	return(
		<div
			id="score"
			style={style}
		>
			
			{props.score} WHACS!
		</div>
	)
}

export default Score
