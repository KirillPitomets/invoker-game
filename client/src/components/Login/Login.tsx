import React, { useEffect } from 'react'
// ==== Redux ====
import { useDispatch } from 'react-redux'
// ==== action creators ====
import { login } from '../../store/action-creators/user'
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
import { InputsName } from '../../types/form/loginFormData'
import { ILogin } from '../../types/services/UserService'
// ==== Styles ====
import cl from './Login.module.scss'
import cn from 'classnames'
// ==== Components ====
import TextField from '../TextField'
import Button from '../UI/Button'
import PasswordField from '../PasswordField'
import ErrorMessage from '../UI/ErrorMessage'

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILogin>({
		resolver: yupResolver(loginSchema),
	})

	const dispatch = useDispatch()
	const { isAuth } = useTypedSelector(state => state.user)

	const { isServerWorking, loginError} = useTypedSelector( state => state.error)

	const formSubmit: SubmitHandler<ILogin> = data => {
		dispatch(login(data))
	}

	const navigate = useNavigate()

	const [ loginDebounce ] = useDebounce<ILogin, void>(formSubmit, 500)

	useEffect(() => {
		if (isAuth) {
			navigate(`/${RouteEnum.user}`, { replace: false })
		}
	}, [isAuth])

	return (
		<form className={cl.form} onSubmit={handleSubmit(loginDebounce)}>
			<TextField
				name='username'
				registerInForm={register(InputsName.username, { required: true })}
				placeholder='Nickname'
			/>
			<PasswordField
				name='password'
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
					!isServerWorking ? "Server is not working. Try later" : "",
					errors.username?.message!,
					errors.password?.message!,
					...loginError,
				]}
			/>

			<Button className={cl.submit}>Login</Button>
		</form>
	)
}

export default Login
