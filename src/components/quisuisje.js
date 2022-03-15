import React from 'react'
import img from '../styles/assets/desktop.jpg'
import { HashLink } from 'react-router-hash-link'

const quisuisje = () => {
	return (
		<div id="quisuisje" className="quisuisje">
			<div className="container">
				<div className="quisuisje--wrapper">
					<div className="quisuisje--content">
						<h2>Qui suis-je ?</h2>
						<p>
							Passionné de <strong>graphisme</strong> depuis plus de 10 ans
							ainsi que de <strong>développement web</strong> depuis 3 ans,
							c’est tout naturellement que j’ai décidé de vous proposer mes
							services en tant que <strong>freelance</strong> !
						</p>
						<p>
							Depuis 2017, j’ai eu l’occasion de collaborer avec des entreprises
							à taille humaine placées sur des secteurs d’activité variés dans
							le but de les aider à améliorer leur présence en ligne.
							Aujourd’hui encore, j’ai pour ambition de vous proposer mes
							services de <strong>création de sites internet</strong> pour que
							vous aussi puissiez développer votre marque, activité ou
							entreprise !
						</p>
						<p>
							Votre satisfaction étant ma priorité, je prends en compte vos
							idées et vos objectifs jusqu’à créer un site internet sur mesure.
							Il peut s’agir d’un e-commerce, de la prestation de service, d’une
							vitrine, d’un blog, d’un forum ou bien d’un portfolio.
						</p>
						<HashLink to="/#contact" className="btn btn-blue">
							Me contacter <i className="fa-solid fa-chevron-right"></i>
						</HashLink>
					</div>
					<img src={img} alt="Ecran d'ordinateur" />
				</div>
			</div>
		</div>
	)
}

export default quisuisje
