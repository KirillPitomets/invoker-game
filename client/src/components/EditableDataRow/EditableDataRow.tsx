import React, { FC, ReactElement, useState } from 'react'
// ==== Styles ====
import cl from './EditableDataRow.module.scss'
import cn from 'classnames'
// ==== Components ====
import Title from '../UI/Title'
import Button from '../UI/Button'
import PasswordField from '../PasswordField'
import TextField from '../TextField'
import ErrorMessage from '../UI/ErrorMessage'

interface IEditableDataRow {
	title: string
	isPasswordInput?: boolean
	onSubmit?: (args?: any) => void
	registerInForm?: any
	errors?: string[]
	cancelFunction?: (args?: any) => void
}

const EditableDataRow: FC<IEditableDataRow> = ({
	title,
	isPasswordInput = false,
	onSubmit,
	registerInForm,
	cancelFunction,
	errors,
	...props
}) => {
	const [isChanging, setIsChanging] = useState(false)
	const handlerIsChanging = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		setIsChanging(prev => !prev)
	}

	const cancelChanging = () => {
		setIsChanging(false)

		if (cancelFunction) cancelFunction()
	}

	const doneChangin = () => {
		setIsChanging(false)
	}

	return (
		<div className={cl.box}>
			<Title className={cl.title_marg}>{title}</Title>

			{isPasswordInput ? (
				<PasswordField
					withIcon={false}
					registerInForm={registerInForm}
					disabled={!isChanging}
				/>
			) : (
				<TextField
					type='text'
					withIcon={false}
					registerInForm={registerInForm}
					disabled={!isChanging}
				/>
			)}

			{errors ? <ErrorMessage errors={errors} /> : null}

			<div className={cn(cl.btns, cl.btns_marg)}>
				{isChanging ? (
					<>
						<Button onClick={doneChangin} type='submit'>
							Done
						</Button>
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
