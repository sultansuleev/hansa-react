import React from 'react'
import { Helmet } from 'react-helmet-async'

import '../../styles/sections/home.css'
import AdBanner from './modules/AdBanner'
import AdCatalogue from './modules/AdCatalogue'
import DiscountEventBanner from './modules/DiscountEventBanner'
import Recomendations from './modules/Recomendations'
import AboutBanner from './modules/AboutBanner'

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Hansa</title>
			</Helmet>
			<main>
				<AdBanner />
				<AdCatalogue />
				<DiscountEventBanner />
				<Recomendations />
				<AboutBanner />
			</main>
		</>
	)
}

export default Home
