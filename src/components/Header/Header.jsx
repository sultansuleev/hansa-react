import React, { useEffect, useState } from 'react'
import Languages from './modules/Languages'
import Search from './modules/Search'
import HeaderHub from './modules/HeaderHub'
import '../../styles/sections/header.css'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(true)
	const [screenWidth, setScreenWidth] = useState(window.innerWidth)

	const toggleNav = () => {
		setToggleMenu(!toggleMenu)
	}

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth)
		}

		window.addEventListener('resize', changeWidth)

		return () => {
			window.removeEventListener('resize', changeWidth)
		}
	}, [])

	useEffect(() => {
		const burger = document.querySelector('#dropdown')
		const navCon = document.querySelector('nav')
		const nav = document.querySelector('#header-menu')

		burger.addEventListener('click', () => {
			burger.classList.toggle('toggle')
			burger.classList.toggle('burger-op')
			navCon.classList.toggle('nav-active')
			nav.classList.toggle('menu-active')
		})
	}, [toggleMenu])

	useEffect(() => {
		if (screenWidth <= 992) {
			setToggleMenu(!toggleMenu)
		}
	}, [screenWidth])

	return (
		<header className='w-100 p-0'>
			<nav className='navbar navbar-default navbar-expand-xs flex-column justify-content-center p-0'>
				<div className='container px-lg-0 py-3 position-relative'>
					<Languages />
					<div className='nav-con d-flex flex-row justify-content-start'>
						<Search />
						<div className='burger' id='dropdown'>
							<div className='line-1'></div>
							<div className='line-2'></div>
							<div className='line-3'></div>
						</div>
					</div>
				</div>
				<HeaderHub />
			</nav>
		</header>
	)
}

export default Header
