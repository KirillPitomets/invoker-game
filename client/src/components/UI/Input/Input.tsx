import React, { FC, InputHTMLAttributes } from 'react'
// ==== Styles ====
import cl from './Input.module.scss'
import cn from 'classnames'

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
	id,
	className,
	...props
}) => {
	return <input id={id} type='text' className={cn(cl.input, cl.input_pad, className)} {...props} />
}

export default TextInput