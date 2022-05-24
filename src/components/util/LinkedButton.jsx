import React from 'react'
import { Link } from 'react-router-dom'

const LinkedButton = ({ children, classNames, link = '#' }) => {
	return (
		<Link to={link} className={classNames}>
			{children}
		</Link>
	)
}

export default LinkedButton
