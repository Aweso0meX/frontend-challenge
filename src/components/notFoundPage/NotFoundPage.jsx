import React from 'react'
import notFound from '../../assets/notFound.jpg'
import styles from './NotFoundPage.module.scss'

export const NotFoundPage = () => {
	return (
		<div className={styles.wrapper}>
			<img className={styles.image} src={notFound} alt='cat' />
			<h4>Error 404. Page not found</h4>
		</div>
	)
}
