import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
	const [scroll, setScroll] = useState(false)
	const [isActive, setActive] = useState(false)

	const ToggleNav = () => {
		setActive(!isActive)
	}
	const DisableNav = () => {
		setActive(false)
	}

	window.onscroll = function () {
		if (window.pageYOffset === 0) {
			setScroll(false)
		} else {
			setScroll(true)
		}
	}

	// useEffect(function displayNav() {
	// 	if (scroll === true) {
	// 		document.getElementById('nav').style.height = '0px'
	// 		document.getElementById('nav-container').style.display = 'none'
	// 	} else {
	// 		document.getElementById('nav').style.height = '75px'
	// 		document.getElementById('nav-container').style.display = 'flex'
	// 	}
	// })

	return (
		<nav id="nav" className={scroll ? 'nav-scrolled' : ''}>
			<div
				className={scroll ? 'container container-display' : 'container'}
				id="nav-container"
			>
				<div className="brand">
					<span className="logo">ANTHONY COLLETTE</span>
				</div>
				<div className="burger-button" onClick={ToggleNav}>
					<div
						className={isActive ? 'line line-1 line-1-rotate' : 'line line-1'}
					></div>
					<div
						className={isActive ? 'line line-2 opacity' : 'line line-2'}
					></div>
					<div
						className={isActive ? 'line line-3 line-3-rotate' : 'line line-3'}
					></div>
				</div>
				<ul className={isActive ? 'nav-display' : ''} onClick={DisableNav}>
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
