import React, { useState, useEffect } from 'react'

const SearchForm = ({ onSubmit }) => {
	const [value, setValue] = useState('')

	const submitHandler = e => {
		e.preventDefault()

		if (value) {
			onSubmit(value)
		}
	}

	const changeHandler = e => {
		setValue(e.currentTarget.value)
	}
	return (
		<form
			onSubmit={submitHandler}
			className='search-form navbar-nav w-100 justify-content-end pt-3 pt-lg-0'
		>
			<div className='form-group m-0'>
				<input
					type='text'
					className='form-control'
					id='productSearch'
					placeholder='Поиск'
					onChange={changeHandler}
					value={value}
				/>
				<img
					className='search_icon d-block'
					src='/icons/search-icon.svg'
					alt=''
				/>
			</div>
		</form>
	)
}

export default SearchForm
