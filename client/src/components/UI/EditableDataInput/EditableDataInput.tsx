import React, { FC } from 'react'
// ==== Styles ====
import cl from './EditableDataInput.module.scss'
// ==== Components ====
import Input from '../Input'

interface IEditableDataInout {
	value: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	isShowText?: boolean
}

const EditableDataInput: FC<IEditableDataInout> = ({ value, onChange, isShowText = true}) => {
	return (
		<Input
			className={cl.input}
			type={isShowText ? 'text' : 'password'}
			value={value}
			onChange={onChange}
		/>
	)
}

export default EditableDataInput
