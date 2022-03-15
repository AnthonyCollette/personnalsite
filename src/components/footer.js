import React from 'react'
import { Link } from 'react-router-dom'

const footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="copyright">
					<Link to="/mentions">Mentions légales</Link>
					<p>© Anthony Collette, 2022</p>
				</div>
				<div className="socialmedia">
					<a
						href="https://www.linkedin.com/in/graphisteind%C3%A9pendant/"
						target="_blank"
					>
						<i className="fa-brands fa-linkedin"></i>
					</a>
					<a
						href="https://www.facebook.com/anthonycollettedesign"
						target="_blank"
					>
						<i className="fa-brands fa-facebook-square"></i>
					</a>
				</div>
			</div>
		</footer>
	)
}

export default footer
