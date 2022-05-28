import React, { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai'
import styles from './FavoriteItem.module.scss'
import { removeCats } from '../../../redux/reducers/catsReducer'

const FavoriteItem = ({ img, cat }) => {
	const [favorites, setFavorites] = useState(true)
	const dispatch = useDispatch()

	const removeCat = cat => {
		dispatch(removeCats(cat))
	}

	return (
		<div style={{ backgroundImage: `url(${img})` }} className={styles.item}>
			<div onClick={() => removeCat(cat.id)} className={styles.hearthWrapper}>
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

export default FavoriteItem
