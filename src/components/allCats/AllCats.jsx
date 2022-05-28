import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import serviceAPI from '../../api/serviceAPI'
import { useFetching } from '../../hooks/useFetching'
import { getCats } from '../../redux/reducers/catsReducer'
import styles from './AllCats.module.scss'
import { ItemCat } from './itemCat/itemCat'

export const AllCats = () => {
	const { cats } = useSelector(state => state.cats)
	const observerRef = useRef()
	const observer = useRef()
	const dispatch = useDispatch()
	const [fetchCats, loading, error] = useFetching(async () => {
		const catsx = await serviceAPI.getCats()
		dispatch(getCats(catsx))
	})

	useEffect(() => {
		fetchCats()
		var callback = function (entries, observer) {
			if (entries[0].isIntersecting) {
				fetchCats()
			}
		}
		observer.current = new IntersectionObserver(callback)
		observer.current.observe(observerRef.current)
	}, [])

	return (
		<>
			{error && <h2>Произошла ошибка</h2>}
			{loading && (
				<div className={styles.loadingWrapper}>
					<h5 className={styles.loadingText}>... загружаем еще котиков ...</h5>
				</div>
			)}
			<div className={styles.wrapper}>
				{cats.map((cat, i) => (
					<ItemCat cat={cat} key={i} img={cat.url} />
				))}
			</div>
			{loading && (
				<h5 className={styles.loadingText}>... загружаем еще котиков ...</h5>
			)}
			<div ref={observerRef} style={{ height: 200 }}></div>
		</>
	)
}
