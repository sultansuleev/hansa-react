import React from 'react'
import SearchForm from './SearchForm'

const Search = () => {
	const search = searchQuery => {
		console.log(searchQuery)
	}

	return (
		<div className='w-lg-100 pb-3 p-lg-0' id='navbar'>
			<SearchForm onSubmit={search} />
		</div>
	)
}

export default Search
