import React, { FC, useState } from 'react'
// ==== Images ====
import lockSvg from '../../assets/icons/lock.svg'
import userSvg from '../../assets/icons/user.svg'
// ==== Styles ====
import cl from './FormField.module.scss'
import cn from 'classnames'

export enum fieldTypeEnum {
	user = 'user',
	password = 'password',
}

interface IFormField extends React.InputHTMLAttributes<HTMLInputElement> {
	fieldType: fieldTypeEnum
	labelClassName?: string
	reg?: any
}

const FormField: FC<IFormField> = ({
	fieldType,
	id,
	labelClassName,
	className,
	reg,
	...props
}) => {

	return (
		<label htmlFor={id} className={cn(cl.label, labelClassName)}>
			<img
				className={cn(cl.icon, cl.icon_marg)}
				src={
					fieldType === fieldTypeEnum.user
						? userSvg
						: lockSvg
				}
				alt={fieldType}
			/>
			<input
				id={id}
				type='text'
				className={cn(cl.input, className)}
				placeholder={fieldType}
				{...reg}
				{...props}
			/>
		</label>
	)
}

export default FormField
