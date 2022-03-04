import React from 'react'
import infosPicture from '../img/infos-picture.png'

export default function Infos() {
  return (
	<div className='Infos'>
		<img
			src={infosPicture}
			alt='Picture of the card owner'
			className='infos-picture'
		/>
		<h1 className='infos-title title'>Laura Smith</h1>
		<p className='infos-desc'>Frontend Developer</p>
		<p className="infos-website">laurasmith.website</p>
		<button
			type='button'
			className='infos-btn'
		>
			<i className='bx bxs-envelope'></i> Email
		</button>
	</div>
  )
}