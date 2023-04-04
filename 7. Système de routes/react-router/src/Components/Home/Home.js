import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
	return (
		<div>
			<h1>Bienvenue sur le site !</h1>
			<Link to="/contact"
			state={{fromHome: "Hello World !"}}>Contact</Link>
		</div>
	)
}
