import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Layout } from '../layout/Layout'
import { routes } from './routes'

export const AppRouter = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Layout />}>
					{routes.map(route => {
						const Component = route.component
						return (
							<Route
								key={route.path}
								path={route.path}
								element={<Component />}
							/>
						)
					})}
				</Route>
			</Routes>
		</div>
	)
}
