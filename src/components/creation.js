import React from 'react'

const Creation = () => {
	const cards = [
		{
			title: 'La première prise de contact',
			desc: 'Avant même de commencer à élaborer votre site internet, nous devons déterminer quels sont vos objectifs. Ils nous permettront de trouver la bonne stratégie à suivre pour que vous ayez un site qui correspond à vos besoins et à vos envies ! ',
			id: '1',
		},
		{
			title: 'L’élaboration d’une ébauche graphique',
			desc: 'Une fois que nous avons décidé ensemble vers quoi se diriger, je commence une première ébauche graphique de votre projet. À cette étape, il sera possible de modifier chaque élément pour que votre site contienne tout ce que vous désirez.',
			id: '2',
		},
		{
			title: 'La création de votre site internet',
			desc: 'Passons maintenant au vif du sujet : la création de votre site web ! En l’occurrence, je m’occupe de coder chaque élément pour avoir un rendu sur mesure à la fois du point de vue de la mise en page que du bon fonctionnement de chaque page.',
			id: '3',
		},
		{
			title: 'Le peaufinage de chaque détail',
			desc: 'Avant la livraison de votre site internet, je vais vérifier que tout est en ordre. Du référencement naturel au temps de chargement en passant par la qualité des images et l’activation des liens, chaque élément est passé au peigne fin !',
			id: '4',
		},
		{
			title: 'Bravo, votre site internet est prêt à être publié !',
			id: '5',
		},
	]

	return (
		<div className="creation" id="creation">
			<div className="container">
				<h2>Mon processus de création</h2>
				<div className="creation--content">
					<ul>
						{cards.map(({ title, desc, id }) => (
							<li key={title} className={'card card-' + id}>
								<div className="overlay">
									<i className={'fa-solid fa-' + id}></i>
									<h3>{title}</h3>
									<p>{desc}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Creation
