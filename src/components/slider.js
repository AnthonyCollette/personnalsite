import React, { useState } from 'react'

const Slider = () => {
	const [isActive, setActive] = useState(false)
	const stars = [
		{ id: '1' },
		{ id: '2' },
		{ id: '3' },
		{ id: '4' },
		{ id: '5' },
	]

	const ToggleSlider = () => {
		setActive(!isActive)
	}

	return (
		<div className="slider">
			<div className="visuel">
				{stars.map(({ id }) => (
					<i
						key={id}
						className={
							isActive
								? 'fa-solid fa-star star-' + id + ' display-' + id
								: 'fa-solid fa-star star-' + id + ' not-display'
						}
					></i>
				))}
				<h4>Le visuel</h4>
				<p>
					Du côté du visible, nous avons tout ce qui concerne la mise en page,
					la présentation de votre contenu et votre charte graphique ! C’est
					cette dernière qui rendra votre site internet unique et sur mesure à
					l’image que vous voulez donner à votre entreprise, votre business ou
					votre marque.
				</p>
			</div>
			<div
				className={isActive ? 'overlay overlayToRight' : 'overlay'}
				id="overlay"
			>
				<div className="i-wrapper">
					<i
						className={
							isActive
								? 'fa-solid fa-chevron-up chevronToLeft'
								: 'fa-solid fa-chevron-up'
						}
						id="chevron"
						onClick={ToggleSlider}
					></i>
				</div>
			</div>
			<div className="coulisses">
				<h4 className={isActive ? '' : 'display-bande'}>Les coulisses</h4>
				<p>
					Pour que votre site internet soit fonctionnel, il faut qu’il soit bien
					codé ! Je me charge également de cette partie-là pour que vous
					puissiez profiter d’un support efficace, avec un chargement rapide et
					sans aucun bug. Vous pourrez par la suite l’actualiser au fur et à
					mesure.
				</p>
			</div>
		</div>
	)
}

export default Slider
