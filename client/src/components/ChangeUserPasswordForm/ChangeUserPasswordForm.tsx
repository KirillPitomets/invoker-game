import React, { FC, useState } from 'react'
// ==== Hooks ====
import { useForm } from 'react-hook-form'
import { useDebounce } from '../../hooks/useDebounce'
// ==== yup ====
import changePasswordSchema from '../../schemes/changePassword'
import { yupResolver } from '@hookform/resolvers/yup'
// ==== Types ====
import {
	IChangeUserPassword,
	InputNames,
} from '../../types/services/UserService'
// ==== Components ====
import PasswordField from '../PasswordField'
import Button from '../UI/Button'
// ==== Styles ====
import cl from './ChangeUserPasswordForm.module.scss'
import cn from 'classnames'
import ErrorMessage from '../UI/ErrorMessage'

interface IChangePasswordProps {
	onSubmit: (data: IChangeUserPassword) => void
}

const defualtValues: IChangeUserPassword = {
	password: 'This your password :3',
	passwordConfirmation: 'This your password :3',
}

const ChangeUserPasswordForm: FC<IChangePasswordProps> = ({ onSubmit }) => {
	const [isChanging, setIsChanging] = useState(false)

	const {
		register: inputPasswordRegister,
		handleSubmit: handleSubmitPassword,
		formState: {errors},
		setValue,
	} = useForm<IChangeUserPassword>({
		defaultValues: defualtValues,
		resolver: yupResolver(changePasswordSchema)
	})

	const [changePasswordDebounce] = useDebounce<IChangeUserPassword, void>(
		onSubmit,
		500
	)

	const cancelChanging = () => {
		setIsChanging(false)
		setValue(InputNames.password, defualtValues.password)
		setValue(
			InputNames.passwordConfirmation,
			defualtValues.passwordConfirmation
		)
	}

	return (
		<form
			className={cl.form}
			onSubmit={handleSubmitPassword(changePasswordDebounce)}
		>
			<h3>Password</h3>

			<div className={cn(cl.inner, cl['inner_marg'])}>
				<PasswordField
					withIcon={false}
					disabled={!isChanging}
					registerInForm={inputPasswordRegister(InputNames.password)}
				/>
				<PasswordField
					withIcon={false}
					disabled={!isChanging}
					registerInForm={inputPasswordRegister(
						InputNames.passwordConfirmation
					)}
				/>
			</div>

			{
				errors ? 
					<ErrorMessage errors={[errors.passwordConfirmation?.message!, errors.password?.message!]} />
				: null
			}

			<div className={cn(cl.btns, cl.btns_marg)}>
				{isChanging ? (
					<>
						<Button onClick={() => setIsChanging(false)} type='submit'>
							Done
						</Button>
						<Button onClick={cancelChanging}>Cancel</Button>
					</>
				) : (
					<Button
						className={cl.btn}
						onClick={e => {
							e.preventDefault()
							setIsChanging(true)
						}}
					>
						Edit
					</Button>
				)}
			</div>
			{/* <EditableDataRow
				title='Password'
				isPasswordInput={true}
				registerInForm={inputPasswordRegister(InputNames.password)}
			/> */}
		</form>
	)
}

export default ChangeUserPasswordForm
