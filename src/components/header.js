import React from 'react'
import heroVideo from '../styles/assets/videos/hero.mp4'
import { HashLink } from 'react-router-hash-link'

const Header = () => {
	return (
		<header className="hero" id="home">
			<video autoPlay loop muted id="video-hero">
				<source src={heroVideo} type="video/mp4" />
			</video>
			<div className="overlay">
				<div className="hero--content">
					<div className="container">
						<h1>Développeur graphiste freelance</h1>
						<p>
							J’accompagne votre entreprise dans sa refonte graphique et sa
							transformation digitale.
						</p>
						<HashLink to="/#quisuisje" className="btn btn-transparent">
							Découvrir
						</HashLink>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
