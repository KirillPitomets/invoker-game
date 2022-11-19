import React from 'react'
// ==== Route ====
import { useParams } from 'react-router-dom'
// ==== Types ====
import { RouteEnumId } from '../../types/route'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './Authorization.module.scss'
// ==== Components ====
import AuthFormHeader from '../AuthFormHeader'
import Login from '../Login'
import Registration from '../Registration'
import Loading from '../Loading'

const Authorization = () => {
	const { id } = useParams()

	const { isLoading } = useTypedSelector(state => state.auth)

	return (
		<div className={cl.wrapper} >
			<AuthFormHeader isLoginForm={id === RouteEnumId.login ? true : false} />

			{isLoading ? (
				<Loading />
			) : id === RouteEnumId.login ? (
				<Login />
			) : (
				<Registration />
			)}
		</div>
	)
}

export default Authorization
