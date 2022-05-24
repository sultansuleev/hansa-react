import React from 'react'
import { Link } from 'react-router-dom'
import LinkedButton from '../../../components/util/LinkedButton'

const AboutBanner = () => {
	return (
		<div className='about-con d-flex  justify-content-between py-5 mb-4'>
			<div className='container d-flex flex-column flex-lg-row justify-content-between align-items-center'>
				<div className='about-left mb-4 mb-lg-0'>
					<img alt='' className='mr-0 mr-lg-3' src='/images/Imagew.png' />
				</div>
				<div className='about-right p-lg-5'>
					<div className='about-content p-lg-5'>
						<h2>Широкий и разнообразный ассортимент бытовой техники HANSA</h2>
						<p>
							Hansa — это хорошо известный европейский бренд бытовой техники,
							доступный в более чем 20 странах, который также является самым
							предпочитаемым брендом на рынках Восточной Европы.
							<br />
							Почти 70-летний опыт в производстве бытовой техники позволил нам
							разработать широкий и разнообразный ассортимент бытовой техники,
							который удовлетворяет потребности миллионов потребителей с точки
							зрения дизайна и технологий.
						</p>
						<LinkedButton link='#' classNames='btn p-3 px-4'>
							Узнать больше
						</LinkedButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AboutBanner
