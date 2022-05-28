import React from 'react'
import { Outlet } from 'react-router-dom'
import { CustomLink } from '../../UI/CustomLink/CustomLink'
import { links } from '../router/links'
import styles from './Layout.module.scss'

export const Layout = () => {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.headerWrapper}>
					{links.map(link => (
						<CustomLink key={link.path} to={link.path}>
							<div className={styles.link}>{link.name}</div>
						</CustomLink>
					))}
				</div>
			</header>
			<Outlet />
		</div>
	)
}
