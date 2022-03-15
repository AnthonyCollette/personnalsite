import React from 'react'
import Header from '../components/header'
import Quisuisje from '../components/quisuisje'
import Professionnel from '../components/professionnel'
import Services from '../components/services'
import Creation from '../components/creation'
import Whyme from '../components/whyme'
import Footer from '../components/footer'
import Contact from '../components/contact'

const home = () => {
	return (
		<div>
			<Header />
			<Quisuisje />
			<Professionnel />
			<Services />
			<Creation />
			<Whyme />
			<Contact />
			<Footer />
		</div>
	)
}

export default home
