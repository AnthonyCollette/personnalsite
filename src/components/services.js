import React from 'react'
import { HashLink } from 'react-router-hash-link'
import seo from '../styles/assets/seo.jpg'

const services = () => {
	return (
		<div className="services" id="services">
			<div className="container">
				<div className="services--content">
					<h2>En quoi puis-je vous aider ?</h2>
					<p>
						Internet est l’outil parfait pour faire la promotion de votre
						activité quelle qu’en soit la nature ! Avoir un site internet vous
						permet d’augmenter votre <strong>visibilité</strong>, d’attirer plus
						de clients et de développer votre business. Nombreux sont ceux qui
						utilisent internet pour trouver des professionnels, des produits ou
						des services dont ils ont besoin.
					</p>
					<p>
						Il est donc primordial d’avoir un site internet
						<strong>performant</strong> et à votre image. Pourtant, ce n’est pas
						chose facile ! Il n’est pas impossible de créer soi-même son site,
						mais sans connaissance du web cela prend énormément de temps.
					</p>
					<p>
						En faisant appel à un professionnel, vous allez pouvoir bénéficier
						de son expertise et avoir un tout nouveau support où proposer du
						contenu à votre audience, clientèle et partenaire professionnel.
						C’est à cet instant précis que je rentre en jeu !
					</p>
					<p>
						Avec mes services, vous allez obtenir à la fois un site internet
						original qui correspond à l’image que vous voulez renvoyer de votre
						activité tout en étant
						<strong>efficace, optimisé</strong> et <strong>responsive</strong>.
						Cette dernière caractéristique est particulièrement importante
						puisque nous sommes dans une ère où plus de 73% des internautes
						naviguent depuis leur téléphone !
					</p>
					<HashLink to="/#contact" className="btn btn-blue">
						Demander un devis <i className="fa-solid fa-chevron-right"></i>
					</HashLink>
				</div>
				<img src={seo} alt="Tableau avec Audience écrit dessus" />
			</div>
		</div>
	)
}

export default services
