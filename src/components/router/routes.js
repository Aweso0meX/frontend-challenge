import { AllCats } from '../allCats/AllCats'
import { FavoriteCats } from '../favoriteCats/FavoriteCats'
import { NotFoundPage } from '../notFoundPage/NotFoundPage'

export const PATH_ALLCATS = '/frontend-challenge/'
export const PATH_FAVORITES = '/frontend-challenge/favorite'
export const PATH_NOT_FOUND = '/*'

export const routes = [
	{ path: PATH_ALLCATS, component: AllCats },
	{ path: PATH_FAVORITES, component: FavoriteCats },
	{ path: PATH_NOT_FOUND, component: NotFoundPage },
]
