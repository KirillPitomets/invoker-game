import React, { FC, InputHTMLAttributes, useState } from 'react'
// ==== Imgs ====
import lock from '../../assets/icons/lock.svg'
// ==== Styles ====
import cl from './PasswordField.module.scss'
import cn from 'classnames'
// ==== Components ====
import ButtonEye from '../UI/ButtonEye'

interface IPasswordField extends InputHTMLAttributes<HTMLInputElement> {
	registerInForm?: any
	labelClassName?: string
	withIcon?: boolean
}

const PasswordField: FC<IPasswordField> = ({
	registerInForm,
	labelClassName,
	withIcon = true,
	...props
}) => {
	const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

	const togglePasswordVisibility = () => {
		setIsShowPassword(prev => !prev)
	}

	return (
		<label className={cn(cl.inner, labelClassName)}>
			{withIcon ? (
				<img className={cn(cl.icon, cl.icon_marg)} src={lock} alt='the lock' />
			) : null}

			<div className={cl.wrap}>
				<input
					className={cl.input}
					type={isShowPassword ? 'text' : 'password'}
					{...registerInForm}
					{...props}
				/>
				
				<ButtonEye
					isShow={isShowPassword}
					handleShow={togglePasswordVisibility}
				/>

			</div>
		</label>
	)
}

export default PasswordField
