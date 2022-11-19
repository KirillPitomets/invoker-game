import React, { ChangeEvent, useEffect } from 'react'
// ==== React router dom ====
import { useNavigate } from 'react-router-dom'
// ==== Use form ====
import { useForm, SubmitHandler } from 'react-hook-form'
// ==== yup ====
import registrationSchema from '../../schemes/registration'
import { yupResolver } from '@hookform/resolvers/yup'
// ==== Hooks ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDebounce } from '../../hooks/useDebounce'
import { useInput } from '../../hooks/useInput'
// ==== ActionCreators ====
import { registration } from '../../store/action-creators/auth'
// ==== Types ====
import {
	InputsName,
} from '../../types/regInputsName'
import { RouteEnum } from '../../types/route'
import { IRegistration } from '../../Services/types/UserService'
// ==== Styles ====
import cl from './Registration.module.scss'
// ==== components ====
import Button from '../UI/Button'
import FormField, { fieldTypeEnum } from '../FormField'
import ErrorMessage from '../UI/ErrorMessage'
import PasswordField from '../PasswordField'

const Registration = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegistration>({
		resolver: yupResolver(registrationSchema),
	})

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { isAuth, errMessages: errMessageFromServer } = useTypedSelector(
		state => state.auth
	)

	const formSubmit: SubmitHandler<IRegistration> = data => {
		dispatch(registration(data))
	}

	const { debounceCallBack } = useDebounce(formSubmit, 500)

	useEffect(() => {
		if (isAuth) {
			navigate(`/${RouteEnum.user}`)
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
				labelClassName={cl.label}
				registerInForm={register(InputsName.password, { required: true })}
				placeholder='Password'
			/>

			<PasswordField
				placeholder='Confirm Password'
				registerInForm={register(InputsName.confirmationPassword, {
					required: true,
				})}
				labelClassName={cl.label}
			/>

			<ErrorMessage
				errors={[
					errors.username?.message!,
					errors.password?.message!,
					errors.confirmationPassword?.message!,
					errMessageFromServer.reg,
				]}
			/>
			<Button className={cl.submit}>Registration</Button>
		</form>
	)
}

export default Registration
