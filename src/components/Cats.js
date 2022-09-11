import React from 'react'
import Cat from './Cat'
import "./Cats.css"
export default function Cats({ cats }) {
	return (
		<div className="cats-wrapper">
			<div className='cats-block'>
				{cats.map((cat) => {
					return (
						<Cat key={Math.random()} cat={cat} />
					)
				})}
			</div>
		</div>

	)
}
