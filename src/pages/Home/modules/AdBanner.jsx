import React from 'react'
import LinkedButton from '../../../components/util/LinkedButton'

const AdBanner = () => {
	return (
		<div className='home-upper-con d-flex flex-column pb-4 pt-0'>
			<div className='h-u-container d-flex flex-row'>
				<div className='container d-flex flex-column align-items-start justify-content-center'>
					<h2 className='mb-4'>Новая встраиваемая вытяжка HANSA</h2>
					<p className='mb-4'>Лучший выбор по приятным ценам.</p>
					<LinkedButton link='#' classNames='btn p-3 px-5'>
						Узнать больше
					</LinkedButton>
				</div>
				<img alt='' src='/images/Vector 2187.png' />
				<img alt='' src='/images/Mask Group.png' />
			</div>
		</div>
	)
}

export default AdBanner
