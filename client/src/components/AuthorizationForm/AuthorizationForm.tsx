import React, { useEffect } from 'react'
// ==== Route ====
import { useNavigate, useParams } from 'react-router-dom'
// ==== Types ====
import { RouteEnum, RouteEnumId } from '../../types/route'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './AuthorizationForm.module.scss'
// ==== Components ====
import AuthFormHeader from '../AuthFormHeader'
import Login from '../Login'
import Registration from '../Registration'
import Loading from '../Loading'

const Authorization = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { isLoading, isAuth } = useTypedSelector(state => state.user)

	useEffect(() => {
		if (isAuth) navigate(`/${RouteEnum.user}`)
	}, [])

	return (
		<div className={cl.wrapper}>
			{isLoading ? (
				<Loading />
			) : id === RouteEnumId.login ? (
				<>
					<AuthFormHeader
						isLoginForm={id === RouteEnumId.login ? true : false}
					/>
					<Login />
				</>
			) : (
				<>
					<AuthFormHeader
						isLoginForm={id === RouteEnumId.login ? true : false}
					/>
					<Registration />
				</>
			)}
		</div>
	)
}

export default Authorization
