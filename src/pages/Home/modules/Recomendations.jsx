import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { prods } from '../../../assets/data/product'
import LinkedButton from '../../../components/util/LinkedButton'

const Recomendations = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		if (prods.length > 0) {
			setData(prods)
		}
	}, [])

	return (
		<div className='recommendation-con d-flex flex-column flex-lg-row justify-content-between py-5 mb-4'>
			<div className='container d-flex flex-column justify-content-between align-items-center'>
				<div className='w-100 rec-top-content d-flex flex-column flex-lg-row justify-content-between align-items-center mb-4 mb-lg-5'>
					<h3 className=''>Рекомендованные товары</h3>

					<LinkedButton
						link='#'
						classNames='d-flex flex-row align-items-center justify-content-around'
					>
						Смотреть все
						<img
							alt=''
							className='d-inline-block ml-1'
							src='/icons/Up 16px.svg?23052022'
						/>
					</LinkedButton>
				</div>

				<div className='recommendation w-100'>
					{data
						? data.map(product => (
								<div className='recommendation-item p-3' key={product._id}>
									<div className='recommendation-content w-100 p-4 pt-2 d-flex flex-column justify-content-center align-items-center'>
										<div className='event-status d-flex flex-row justify-content-between'>
											{product.isForCredit && (
												<div className='credit mr-3 d-flex justify-content-center align-items-center'>
													<p className='m-0'>0 0 12</p>
												</div>
											)}
											{product.isOnDiscount && (
												<div className='disc d-flex justify-content-center align-items-center'>
													<img
														alt=''
														className='d-inline-block m-0'
														src='/icons/discount.svg?23052022'
													/>
												</div>
											)}
										</div>
										<img
											alt=''
											className='d-inline-block m-0 mb-4'
											src={product.image}
										/>
										<p className='util-data'>{product.serial}</p>
										<p className='recom-name mb-3'>{product.name}</p>
										<p className='cost d-flex flex-row justify-content-between w-100'>
											{product.cost} <span>{product.prevCost}</span>
										</p>
										<p className='util-data'>
											{product.stock ? 'В наличии' : 'Нету в наличии'}
										</p>

										<LinkedButton
											link='#'
											classNames='btn d-flex flex-row justify-content-around align-items-center py-3 px-4'
										>
											<img
												alt=''
												className='d-block mr-3'
												src='/icons/Cart.svg?23052022'
											/>
											В корзину
										</LinkedButton>
									</div>
								</div>
						  ))
						: 'Loading...'}
				</div>
			</div>
		</div>
	)
}

export default Recomendations
