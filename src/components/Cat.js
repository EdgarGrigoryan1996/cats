import React from 'react'

export default function Cat({ cat }) {
	return (
		<div className='cat-block'><img className='cat-img' src={cat.url} alt={cat.id} /></div>
	)
}
