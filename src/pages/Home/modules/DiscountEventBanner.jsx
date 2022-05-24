import React from 'react'
import LinkedButton from '../../../components/util/LinkedButton'

const DiscountEventBanner = () => {
	return (
		<div className='discount-event-con d-flex flex-column flex-lg-row justify-content-between'>
			<div className='container d-flex flex-row justify-content-between py-5'>
				<div className='discount-content'>
					<h3 className='mb-1'>Акция декабря</h3>
					<h2 className='mb-4'>Скидка 15%</h2>
					<LinkedButton link='#' classNames='btn p-3 px-5'>
						на все встраиваемые духовки HANSA
					</LinkedButton>
				</div>
				<img alt='' className=' m-0' src='/images/Image.png?23052022' />
			</div>
		</div>
	)
}

export default DiscountEventBanner
