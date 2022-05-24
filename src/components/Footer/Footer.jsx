import React from 'react'
import '../../styles/sections/footer.css'

const Footer = () => {
	return (
		<footer>
			<nav className='f-con navbar w-100 navbar-light navbar-expand-lg p-4 py-5'>
				<div className='container p-0 flex-column flex-lg-row align-items-space-around align-items-lg-start'>
					<div className='company-info f-con d-flex flex-column justify-content-between mb-5 m-lg-0'>
						<img
							className='d-block'
							src='/images/Hansa logo footer.png?23052022'
						/>

						<p className='m-0'>Hansa © 2020</p>
					</div>
					<div className='f-con h-100 d-flex flex-column justify-content-between mb-5 m-lg-0'>
						<a href='#'>Духовые шкафы</a>
						<a href='#'>Отдельностоящие плиты</a>
						<a href='#'>Посудомоечные машины</a>
						<a href='#'>Варочные поверхности</a>
					</div>
					<div className='f-con d-flex flex-column justify-content-between mb-5 m-lg-0'>
						<a href='#'>Вытяжки</a>
						<a href='#'>Микроволновые печи</a>
						<a href='#'>Стиральные машины</a>
						<a href='#'>Холодильники</a>
					</div>
					<div className='f-con f-con-pre d-flex flex-column justify-content-between mb-5 m-lg-0'>
						<a href='#'>Клиентам</a>
						<a href='#'>Партнерам</a>
						<a href='#'>Акция/Аутлет</a>
					</div>
					<div className='f-con d-flex flex-column justify-content-between'>
						<a
							href='https://api.whatsapp.com/send?phone=78005501126'
							target='_blank'
							className='d-flex flex-row justify-content-start align-items-center'
						>
							<img className='d-block f-mr' src='/icons/phone.svg?23052022' />8
							800 550-11-26
						</a>
						<a
							href='mailto:test@email.com'
							className='d-flex flex-row justify-content-start align-items-center'
						>
							<img
								className='d-block f-mr'
								src='/icons/envelope.svg?23052022'
							/>
							test@email.com
						</a>
						<a
							href='https://goo.gl/maps/FmGHRmAxRckTyB276'
							className='d-flex flex-row justify-content-start align-items-center'
						>
							<img className='d-block f-mr' src='/icons/pin.svg?23052022' />
							г. Москва ул. Иванова 23
						</a>
						<div className='soc d-flex flex-row justify-content-start align-items-center'>
							<a href='#' className='f-mr'>
								<img
									className='d-block'
									src='/icons/instagram 1.svg?23052022'
								/>
							</a>
							<a href='#' className='f-mr'>
								<img className='d-block' src='/icons/vk 1.svg?23052022' />
							</a>
							<a href='#' className='f-mr'>
								<img
									className='d-block'
									src='/icons/facebook-f 1.svg?23052022'
								/>
							</a>
						</div>
					</div>
				</div>
			</nav>
		</footer>
	)
}

export default Footer
