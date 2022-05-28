import React from 'react'

import { Link, useMatch } from 'react-router-dom'
import styles from './CustomLink.module.scss'

export const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to)

	return (
		<Link
			to={to}
			className={match ? `${styles.link} ${styles.linkActive}` : styles.link}
			{...props}
		>
			<div className={match ? styles.linkWrapper : null}>{children}</div>
		</Link>
	)
}
