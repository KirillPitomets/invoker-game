import React, { ChangeEvent, FC, InputHTMLAttributes, useState } from 'react'
// ==== Imgs ====
import eye from '../../assets/icons/eye.svg'
import crossedOutEye from '../../assets/icons/crossedOutEye.svg'
import lock from '../../assets/icons/lock.svg'
// ==== Styles ====
import cl from './PasswordField.module.scss'
import cn from 'classnames'

interface IPasswordField extends InputHTMLAttributes<HTMLInputElement> {
	registerInForm?: any
	labelClassName?: string
}

const PasswordField: FC<IPasswordField> = ({
	registerInForm,
	labelClassName,
	...props
}) => {
	const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

	const togglePasswordVisibility = () => {
		setIsShowPassword(prev => !prev)
	}

	return (
		<label className={cn(cl.inner, labelClassName)}>
			<img className={cn(cl.icon, cl.icon_marg)} src={lock} alt='the lock' />

			<div className={cl.wrap}>
				<input
					className={cl.input}
					type={isShowPassword ? 'text' : 'password'}
					{...registerInForm}
					{...props}
				/>

				<div
					tabIndex={-1}
					className={cl['view-password-btn']}
					onClick={e => {
						e.preventDefault()
						togglePasswordVisibility()
					}}
				>
					{isShowPassword ? (
						<img className={cl.eye} src={eye} alt='Show password' />
					) : (
						<img
							className={cl.eye}
							src={crossedOutEye}
							alt="Don't show password"
						/>
					)}
				</div>
			</div>
		</label>
	)
}

export default PasswordField
