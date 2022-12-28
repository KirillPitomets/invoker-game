import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
// ==== Styles ====
import cl from './Button.module.scss'
import cn from 'classnames'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	outline?: boolean
	disabled?: boolean
}

const Button: FC<IButton> = ({
	children,
	outline,
	className,
	disabled,
	...props
}) => {
	return (
		<button
			className={cn(cl.btn, outline ? cl.btn_outline : '', disabled && cl.btn_disabled, className)}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
