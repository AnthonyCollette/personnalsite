import React from 'react'
import img from '../styles/assets/whyme.jpg'
import Slider from './slider'

const whyme = () => {
	return (
		<div className="whyme">
			<div className="container">
				<h2>
					Pourquoi faire appel à un freelance à la fois développeur web et
					graphiste ?
				</h2>
				<div className="whyme--content">
					<div className="whyme--content__text">
						<p>
							Au-delà de gagner du temps, vous allez également obtenir un site
							internet efficace, adapté à votre cible et autonome ! Je m’occupe
							de l’élaboration graphique et du développement de ce tout nouveau
							support qui deviendra une vitrine source de trafic pour votre
							activité.
						</p>
						<p>
							En ayant la double casquette de <strong>webdesigner</strong> et de{' '}
							<strong>développeur</strong> le tout en <strong>freelance</strong>
							, je peux intervenir pour créer votre site internet de A à Z sans
							que vous ayez besoin d’embaucher un autre professionnel. Cela vous
							permet de bénéficier de prestations personnalisées sans devoir
							passer par plusieurs intermédiaires. Je prends aussi en charge les
							refontes de sites internet déjà existants.
						</p>
						<p>
							Grâce à mon parcours, j’ai pu acquérir des connaissances dans le
							<strong>référencement SEO</strong>, le codage{' '}
							<strong>front-end en HTML, JavaScript et CSS</strong>, le
							développement de landing page, la création de contenu sur mesure,
							l’élaboration d’une <strong>charte graphique originale</strong> et
							bien plus encore. Toutes ces compétences me permettent aujourd’hui
							de vous fournir des prestations adaptées à vos besoins !
						</p>
					</div>
					<img src={img} alt="Bureau vu du haut" />
				</div>
				<h3>Un service à deux facettes</h3>
				<p>
					Derrière la <strong>création d’un site internet</strong>, il y a deux
					facettes : celle que l’on voit et celle qui est invisible ! Les deux
					sont tout autant importantes, c’est pourquoi je vous propose de
					m’occuper de l’une comme de l’autre.
				</p>
				<Slider />
			</div>
		</div>
	)
}

export default whyme
