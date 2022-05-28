import React from 'react'
import cat from '../../../assets/cat.jpg'
import style from './EmptyCats.module.scss'

const EmptyCats = () => {
	return (
		<div className={style.wrapper}>
			<img src={cat} alt='' />
			<h2 className={style.title}>Вы не добавили котиков в коллекцию</h2>
		</div>
	)
}

export default EmptyCats
