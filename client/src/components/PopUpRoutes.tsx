import React from 'react'
// ==== Router ====
import { Route, Routes } from 'react-router-dom'
import { routes } from '../router/mainRouter'

const PopUpRouter = () => {
	return (
		<Routes>
			{routes.map(({ id, path, Page }) => (
				<Route key={id} path={path} element={<Page />} />
			))}
		</Routes>
	)
}

export default PopUpRouter
