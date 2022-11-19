import React, { FC } from 'react'
// ==== react router dom ====
import { useNavigate, useParams } from 'react-router-dom'
import { RouteEnum, RouteEnumId } from '../../types/route'
// ==== Styles ====
import cl from './AuthFormHeader.module.scss'
import cn from 'classnames'
// ==== Components ====
import Button from '../UI/Button'

interface AuthFormHeader {
	isLoginForm: boolean
}

const AuthFormHeader: FC<AuthFormHeader> = ({isLoginForm}) => {
	const navigate = useNavigate()

	return (
		<div className={cn(cl.wrapper, cl.wrapper_marg)}>
			<Button
				outline={isLoginForm ? false : true}
				onClick={() => navigate(`/${RouteEnum.auth}/${RouteEnumId.login}`)}
			>
				Login
			</Button>
			<Button
				outline={!isLoginForm ? false : true}
				onClick={() => navigate(`/${RouteEnum.auth}/${RouteEnumId.registration}`)}
			>
				Register
			</Button>
		</div>
	)
}

export default AuthFormHeader
