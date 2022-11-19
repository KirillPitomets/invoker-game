import React, { FC } from 'react'
// ==== Styles ====
import cl from './InputCheckbox.module.scss'

interface IInputCheckbox extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputCheckbox: FC<IInputCheckbox> = ({ ...props }) => {
	return (
		<>
			<input type='checkbox' className={cl.input} {...props}/>
			<div className={cl.wrapper}>
				<div className={cl.mark}></div>
			</div>
		</>
	)
}

export default InputCheckbox
