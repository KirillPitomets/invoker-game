import React, { FC, InputHTMLAttributes } from 'react'
// ==== Styles ====
import cl from '../SettingItem.module.scss'
import cn from 'classnames'
// ==== Components ====
import Input from '../../UI/Input'
import Title from '../../UI/Title'
import ResetBtn from '../../UI/ResetBtn'

interface ISettingItemTextInput extends InputHTMLAttributes<HTMLInputElement> {
	id: string
	title: string
	des: string
	hasResetBtn?: boolean
	resetFunction?: (...args: any) => void
}

const SettingItemTextInput: FC<ISettingItemTextInput> = ({
	id,
	title,
	des,
	hasResetBtn,
	resetFunction,
	...props
}) => {
	return (
		<label htmlFor={id} className={cn(cl.label, cl.label_pad, cl.label_marg)}>
			<div className={cl.text}>
				<Title>{title}</Title>
				<p className={cn(cl.des, cl.des_marg)}>{des}</p>
			</div>

			<div>
				<Input id={id} {...props} />
				{hasResetBtn && (
					<ResetBtn className={cl.btn_marg} onClick={resetFunction} />
				)}
			</div>
		</label>
	)
}

export default SettingItemTextInput