import axios from 'axios'
// import Constants from 'expo-constants'

// const API_URL = Constants.expoConfig?.extra?.API_URL
// const APP_KEY = Constants.expoConfig?.extra?.APP_KEY

const url = 'https://jsonplaceholder.typicode.com/todos/1'

export const todos = {
	getTodos: async () => {
		const result = await axios.get(
			url,
			{
				headers: {
					'Content-type': 'application/json',
					Accept: 'application/json',
				},
			}
		)

		return result
	}
}