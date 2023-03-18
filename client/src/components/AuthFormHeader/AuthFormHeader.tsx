import React, { FC } from 'react'
// ==== react router dom ====
import { useNavigate } from 'react-router-dom'
import { RouteEnum, RouteEnumId } from '../../types/route'
// ==== Styles ====
import cl from './AuthFormHeader.module.scss'
import cn from 'classnames'
// ==== Components ====
import Button from '../UI/Button'

interface IAuthFormHeader {
	isLoginForm: boolean
}

const AuthFormHeader: FC<IAuthFormHeader> = ({ isLoginForm }) => {
	const navigate = useNavigate()

	return (
		<div className={cn(cl.wrapper, cl.wrapper_marg)}>
			<Button
				className={cl.btn}
				outline={isLoginForm ? false : true}
				onClick={() => navigate(`/${RouteEnum.auth}/${RouteEnumId.login}`)}
			>
				Login
			</Button>
			<Button
				className={cl.btn}
				outline={!isLoginForm ? false : true}
				onClick={() =>
					navigate(`/${RouteEnum.auth}/${RouteEnumId.registration}`)
				}
			>
				Register
			</Button>
		</div>
	)
}

export default AuthFormHeader
