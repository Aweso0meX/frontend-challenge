import axios from 'axios'

export default class serviceAPI {
	static async getCats() {
		const response = await axios.get(
			'https://api.thecatapi.com/v1/images/search?limit=20&size=small'
		)
		return response.data
	}
}
