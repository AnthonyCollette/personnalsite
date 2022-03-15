import React, { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
	const [scroll, setScroll] = useState(true)

	window.onscroll = function () {
		if (window.pageYOffset === 0) {
			setScroll(true)
		} else {
			setScroll(false)
		}
	}

	useEffect(function displayNav() {
		if (scroll === true) {
			document.getElementById('nav').style.height = '0px'
			document.getElementById('nav-container').style.display = 'none'
		} else {
			document.getElementById('nav').style.height = '75px'
			document.getElementById('nav-container').style.display = 'flex'
		}
	})

	return (
		<nav id="nav">
			<div className="container" id="nav-container">
				<div className="brand">
					<span className="logo">ANTHONY COLLETTE</span>
				</div>
				<ul>
					<li>
						<HashLink to="/#home">Accueil</HashLink>
					</li>
					<li>
						<HashLink to="/#quisuisje">Qui suis-je</HashLink>
					</li>
					<li>
						<HashLink to="/#services">Services</HashLink>
					</li>
					<li>
						<HashLink to="/#creation">Comment ça marche</HashLink>
					</li>
					<li>
						<HashLink to="/#contact">Contact</HashLink>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar
