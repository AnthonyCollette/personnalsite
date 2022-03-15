import React from 'react'

const professionnel = () => {
	return (
		<div className="qualites" id="qualites">
			<div className="overlay">
				<div className="container">
					<h2>Je suis un professionnel...</h2>
					<div className="qualites--content">
						<div className="card">
							<i className="fa-solid fa-ear-listen"></i>
							<h3>à l'écoute</h3>
							<p>
								de vos besoins, de vos problématiques et de vos contraintes !
							</p>
						</div>
						<div className="card">
							<i className="fa-solid fa-code"></i>
							<h3>polyvalent</h3>
							<p>
								qui se charge de chaque étape de la création de votre site !
							</p>
						</div>
						<div className="card">
							<i className="fa-solid fa-paintbrush"></i>
							<h3>créatif</h3>
							<p>dont chaque projet sera unique, à votre image et novateur !</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default professionnel
