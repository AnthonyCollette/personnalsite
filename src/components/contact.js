import React from 'react'

const contact = () => {
	return (
		<div className="contact" id="contact">
			<div className="container">
				<h2>Me contacter</h2>
				<p>
					Vous souhaitez des conseils professionnels pour votre projet ou un
					devis ? Remplissez le formulaire ci-dessous et je vous recontacterai
					dans les plus brefs délais !
				</p>
				<form>
					<input type="text" name="name" placeholder="Nom" />
					<input type="text" name="firstname" placeholder="Prénom" />
					<input type="email" name="email" placeholder="Adresse mail" />
					<textarea
						name="message"
						id="message"
						cols="30"
						rows="10"
						placeholder="Message"
					></textarea>
					<button>Envoyer</button>
				</form>
			</div>
		</div>
	)
}

export default contact
