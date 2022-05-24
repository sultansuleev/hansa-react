import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../../pages/Home/Home'

const Main = () => {
	const location = useLocation()
	return (
		<Routes location={location}>
			<Route exact path='/' element={<Home />} render={props => <Home />} />
		</Routes>
	)
}

export default Main
