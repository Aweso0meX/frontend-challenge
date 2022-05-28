import { combineReducers } from '@reduxjs/toolkit'
import { catsReducer } from './reducers/catsReducer'

export const rootReducer = combineReducers({
	cats: catsReducer,
})
