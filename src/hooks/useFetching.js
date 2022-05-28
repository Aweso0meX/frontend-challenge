import { useState } from 'react'

export const useFetching = callback => {
	const [loading, setloading] = useState(false)
	const [error, setError] = useState('')

	const fetching = async () => {
		try {
			setloading(true)
			await callback()
		} catch (e) {
			setError(e.message)
		} finally {
			setloading(false)
		}
	}
	return [fetching, loading, error]
}
