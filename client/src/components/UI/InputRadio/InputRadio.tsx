import React, { FC, HTMLAttributes } from 'react'
// ==== Styles ====
import cl from './InputRadio.module.scss'
import cn from 'classnames'

interface IInputRadio extends HTMLAttributes<HTMLDivElement> {
	isActive: boolean
}

const InputRadio: FC<IInputRadio> = ({ className, isActive, ...props }) => {
	return (
		<div
			className={cn(cl.radio, isActive && cl.radio_active, className)}
			{...props}
		/>
	)
}

export default InputRadio
