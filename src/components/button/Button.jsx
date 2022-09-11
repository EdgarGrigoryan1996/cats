import React from 'react'

export default function Button({ text, clickFunction, className }) {

	return (
		<button className={className} onClick={clickFunction}>{text}</button>
	)
}
