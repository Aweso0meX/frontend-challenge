import { createSlice } from '@reduxjs/toolkit'

const catsSlice = createSlice({
	name: 'cats',
	initialState: {
		cats: [],
		favoriteCats: [],
	},
	reducers: {
		getCats(state, action) {
			state.cats.push(...action.payload)
		},
		removeCats(state, action) {
			state.favoriteCats = state.favoriteCats.filter(
				cat => cat.id !== action.payload
			)
		},
		addFavoriteCat(state, action) {
			state.favoriteCats.push(action.payload)
		},
	},
})

export const catsReducer = catsSlice.reducer
export const { getCats, removeCats, addFavoriteCat } = catsSlice.actions
