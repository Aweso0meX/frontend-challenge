import React from 'react'
import { useSelector } from 'react-redux'
import EmptyCats from './emptyCats/EmptyCats'
import styles from './FavoriteCats.module.scss'
import FavoriteItem from './favoriteItem/FavoriteItem'

export const FavoriteCats = () => {
	const { favoriteCats } = useSelector(state => state.cats)
	return (
		<>
			<div className={styles.wrapper}>
				{favoriteCats.length ? (
					favoriteCats.map((cat, i) => (
						<FavoriteItem cat={cat} key={i} img={cat.url} />
					))
				) : (
					<EmptyCats />
				)}
			</div>
		</>
	)
}
