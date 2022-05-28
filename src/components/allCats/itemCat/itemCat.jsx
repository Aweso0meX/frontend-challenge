import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import styles from './ItemCat.module.scss'
import { addFavoriteCat } from '../../../redux/reducers/catsReducer'

export const ItemCat = ({ img, cat }) => {
	const [favorites, setFavorites] = useState(false)
	const dispatch = useDispatch()
	const changeFavorites = cat => {
		if (favorites) {
			return
		} else {
			setFavorites(true)
			dispatch(addFavoriteCat(cat))
		}
	}

	return (
		<div style={{ backgroundImage: `url(${img})` }} className={styles.item}>
			<div
				className={styles.hearthWrapper}
				onClick={() => changeFavorites(cat)}
			>
				{favorites ? (
					<AiTwotoneHeart className={styles.hearth} />
				) : (
					<AiOutlineHeart className={styles.hearth} />
				)}
				<AiTwotoneHeart className={styles.hoveredHearth} />
			</div>
		</div>
	)
}
