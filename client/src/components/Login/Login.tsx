import React, { useEffect } from 'react'
// ==== Redux ====
import { useDispatch } from 'react-redux'
// ==== action creators ====
import { login } from '../../store/action-creators/auth'
// ==== yup / Schemes ====
import loginSchema from '../../schemes/login'
import { yupResolver } from '@hookform/resolvers/yup'
// ==== Hooks ====
import { useNavigate } from 'react-router-dom'
// ==== Hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDebounce } from '../../hooks/useDebounce'
// ==== react hook form ====
import { SubmitHandler, useForm } from 'react-hook-form'
// ==== Types ====
import { RouteEnum } from '../../types/route'
import { InputsName, loginFormData } from '../../types/loginFormData'
// ==== Styles ====
import cl from './Login.module.scss'
import cn from 'classnames'
// ==== Components ====
import FormField, { fieldTypeEnum } from '../FormField'
import Button from '../UI/Button'
import PasswordField from '../PasswordField'
import ErrorMessage from '../UI/ErrorMessage'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<loginFormData>({
		resolver: yupResolver(loginSchema),
	})

	const dispatch = useDispatch()
	const { errMessages: errMessageFromServer, userAuthErrMessage, isAuth } = useTypedSelector(
		state => state.auth
	)

	const formSubmit: SubmitHandler<loginFormData> = data => {
		dispatch(login(data))
	}

	const navigate = useNavigate()

	const { debounceCallBack } = useDebounce<any, any>(formSubmit, 500)

	useEffect(() => {
		if (isAuth) {
			navigate(`/${RouteEnum.user}`, { replace: false })
		}
	}, [isAuth])

	return (
		<form className={cl.form} onSubmit={handleSubmit(debounceCallBack)}>
			<FormField
				fieldType={fieldTypeEnum.user}
				reg={register(InputsName.username, { required: true })}
				placeholder='Nickname'
			/>
			<PasswordField
				placeholder='Password'
				registerInForm={register(InputsName.password, {
					required: true,
				})}
				labelClassName={cl.label}
			/>

			<a className={cn(cl.link, cl.link_marg)} tabIndex={0}>
				Forgot Password ?
			</a>

			<ErrorMessage
				errors={[
					errors.username?.message!,
					errors.password?.message!,
					userAuthErrMessage,
					...errMessageFromServer.login,
				]}
			/>

			<Button className={cl.submit}>Login</Button>
		</form>
	)
}

export default Login
