import React from 'react'
import LinkedButton from '../../../components/util/LinkedButton'

const HeaderHub = () => {
	return (
		<div id='header-menu' className='header-hub w-100 pt-5 py-lg-3'>
			<div className='container p-0 d-flex flex-column flex-lg-row'>
				<div className='logo mb-5 m-lg-0'>
					<img
						alt=''
						className='logo_icon d-block'
						src='/images/Hansa logo.png'
					/>
				</div>
				<LinkedButton
					link='#'
					classNames='catalogues-btn btn d-flex flex-row justify-content-around p-3  mb-5 m-lg-0'
				>
					<img
						alt=''
						className='logo_icon mr-3'
						src='/icons/Menu.svg?23052022'
					/>
					Каталог Товаров
				</LinkedButton>

				<div className='header_location p-0 d-flex flex-row justify-content-around align-items-center  mb-5 m-lg-0'>
					<img
						alt=''
						className='header-city_logo d-block mr-3'
						src='/icons/location-icon.svg?23052022'
					/>

					<div className='header_city_selector'>
						Ваш город:{' '}
						<LinkedButton link='#' classNames='selected ml-1'>
							Москва
						</LinkedButton>
					</div>
				</div>
				<LinkedButton
					link='#'
					classNames='discount d-flex flex-row align-items-center  mb-5 m-lg-0'
				>
					<img
						alt=''
						className='d-block mr-2'
						src='/icons/discount.svg?23052022'
					/>
					Акция/Аутлет
				</LinkedButton>
				<LinkedButton
					link='#'
					classNames='clients d-flex flex-row  mb-5 m-lg-0'
				>
					Клиентам
				</LinkedButton>
				<LinkedButton
					link='#'
					classNames='clients d-flex flex-row align-items-center  mb-5 m-lg-0'
				>
					<img alt='' className='d-block mr-3' src='/icons/user.svg?23052022' />
					Партнерам
				</LinkedButton>
				<LinkedButton
					link='#'
					classNames='cart d-flex flex-row align-items-center  mb-5 m-lg-0'
				>
					<div className='event-status d-flex flex-row justify-content-between'>
						<div className='count mr-3 d-flex justify-content-center align-items-center'>
							<p className='m-0'>4</p>
						</div>
					</div>
					<img alt='' className='d-block mr-3' src='/icons/Cart.svg?23052022' />
					<div className='cart-info'>
						<p className='m-0 mb-1'>Корзина</p>
						<p className='m-0'>18 000 ₸</p>
					</div>
				</LinkedButton>
			</div>
		</div>
	)
}

export default HeaderHub
