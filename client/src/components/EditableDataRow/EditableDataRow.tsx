import React, { FC, useState } from 'react'
// ==== Styles ====
import cl from './EditableDataRow.module.scss'
import cn from 'classnames'
// ==== Components ====
import Title from '../UI/Title'
import Button from '../UI/Button'
import ButtonEye from '../UI/ButtonEye'
import EditableDataInput from '../UI/EditableDataInput'

interface IEditableDataRow {
	title: string
	initialText: string
	isPasswordInput?: boolean
	submit: (args?: any) => void
}

const EditableDataRow: FC<IEditableDataRow> = ({
	title,
	submit,
	isPasswordInput = false,
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

	const handlerIsChanging = () => {
		setIsChanging(prev => !prev)
	}

	const cancelChanging = () => {
		setInputValue(initialText)
		setIsChanging(false)
	}

	const saveChangin = () => {
		setIsChanging(false)

		// TODO: Make request on server for change username
	}

	return (
		<div className={cl.box}>
			<Title className={cl.title_marg}>{title}</Title>

			{isPasswordInput ? (
				<div className={cl['input-wrapper']}>
					<EditableDataInput
						value={inputValue}
						onChange={onChange}
						isShowText={isShowPassword}
					/>
					<ButtonEye
						isShow={isShowPassword}
						handleShow={togglePasswordVisibly}
					/>
				</div>
			) : (
				<EditableDataInput
					value={inputValue}
					onChange={onChange}
					isShowText={true}
				/>
			)}

			<div className={cn(cl.btns, cl.btns_marg)}>
				{isChanging ? (
					<>
						<Button onClick={saveChangin}>Done</Button>
						<Button onClick={cancelChanging}>Cancel</Button>
					</>
				) : (
					<Button className={cl.btn} onClick={handlerIsChanging}>
						Edit
					</Button>
				)}
			</div>
		</div>
	)
}

export default EditableDataRow
