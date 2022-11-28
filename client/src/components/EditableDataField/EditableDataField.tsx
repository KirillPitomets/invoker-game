import React, { FC, useState } from 'react'
// ==== Styles ====
import cl from './EditableDataField.module.scss'
import cn from 'classnames'
// ==== Components ====
import Input from '../UI/Input'
import Title from '../UI/Title'
import Button from '../UI/Button'
import ButtonEye from '../UI/ButtonEye'

interface IEditableDataField {
	title: string
	initialText: string
	isPasswordInput: boolean
	submit: (args?: any) => void
}

const EditableDataField: FC<IEditableDataField> = ({
	title,
	submit,
	isPasswordInput,
	initialText,
}) => {
	const [inputValue, setInputValue] = useState(initialText)
	const [isChanging, setIsChanging] = useState(false)
	const [isShowPassword, setIsShowPassword] = useState(false)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const togglePasswordVisibly = () => {
		setIsShowPassword(prev => !prev)
	}

	return (
		<div className={cl.box}>
			<Title className={cl.title_marg}>{title}</Title>

			{isPasswordInput ? (
				<div className={cl['input-wrapper']}>
					<Input
						className={cl.input}
						type={isShowPassword ? 'text' : 'password'}
						value={inputValue}
						onChange={onChange}
					/>
					<ButtonEye isShow={isShowPassword} handleShow={togglePasswordVisibly} />
				</div>
			) : (
				<Input
					className={cl.input}
					type='text'
					value={inputValue}
					onChange={onChange}
				/>
			)}

			{isChanging ? (
				<div className={cl.btns}>
					<Button>Done</Button>
					<Button>Cancel</Button>
				</div>
			) : (
				<Button className={cn(cl.btn, cl.btn_marg)}>Edit</Button>
			)}
		</div>
	)
}

export default EditableDataField
