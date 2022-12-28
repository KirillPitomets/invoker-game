import React, { FC } from 'react'
// ==== Images ====
import userSvg from '../../assets/icons/user.svg'
// ==== Styles ====
import cl from './TextField.module.scss'
import cn from 'classnames'

interface ITextField extends React.InputHTMLAttributes<HTMLInputElement> {
	labelClassName?: string
	withIcon?: boolean
	registerInForm?: any
}

const FormField: FC<ITextField> = ({
	id,
	labelClassName,
	withIcon = true,
	className,
	registerInForm,
	...props
}) => {
	return (
		<label htmlFor={id} className={cn(cl.label, labelClassName)}>
			{withIcon ? (
				<img
					className={cn(cl.icon, cl.icon_marg)}
					src={userSvg}
					alt='user icon'
				/>
			) : null}
			<input
				id={id}
				type='text'
				className={cn(cl.input, className)}
				{...registerInForm}
				{...props}
			/>
		</label>
	)
}

export default FormField
