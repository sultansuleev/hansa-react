import React, { useState, useEffect } from 'react'
import { prodCat } from '../../../assets/data/productsCatalogues'
import LinkedButton from '../../../components/util/LinkedButton'

const AdCatalogue = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		if (prodCat.length > 0) {
			setData(prodCat)
		}
	}, [])

	return (
		<div className='home-under-con d-flex flex-column flex-lg-row justify-content-between py-5 mb-4'>
			<div className='container d-flex flex-column justify-content-between align-items-center'>
				<h3 className='w-100 mb-4 mb-lg-5'>Наша техника</h3>
				<div className='product w-100'>
					{data
						? data.map((productCategory, index) => (
								<LinkedButton to='#' classNames='product-item p-3' key={index}>
									<div className='product-content w-100 px-3 pt-5 pb-3 d-flex flex-column justify-content-center align-items-center'>
										<div className='event-status d-flex flex-row justify-content-between'>
											<div className='count mr-3 d-flex justify-content-center align-items-center'>
												<p className='m-0'>{productCategory.productsCount}</p>
											</div>
										</div>
										<img
											className='d-inline-block m-0 mb-4'
											alt=''
											src={productCategory.categoryIcon}
										/>
										<p className='d-flex flex-row justify-content-center align-items-center'>
											{productCategory.categoryName}
											<img
												className='d-inline-block m-0 ml-1'
												alt=''
												src='/icons/Up 16px.svg?23052022'
											/>
										</p>
									</div>
									<div className='w-50 h-100 product_selector'></div>
								</LinkedButton>
						  ))
						: 'Loading...'}
				</div>
			</div>
		</div>
	)
}

export default AdCatalogue
