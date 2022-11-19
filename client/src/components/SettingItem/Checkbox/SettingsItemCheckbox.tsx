import React, { FC } from 'react'
// ==== Styles ====
import cl from '../SettingItem.module.scss'
import cn from 'classnames'
// ==== Types ====
import { ISettingItem } from '../types'
// ==== Components ====
import InputCheckbox from '../../UI/InputCheckbox'
import Title from '../../UI/Title'

const SettingsItemCheckbox: FC<ISettingItem> = ({
	id,
	title,
	des,
	...props
}) => {
	return (
		<label htmlFor={id} className={cn(cl.label, cl.label_pad, cl.label_marg)}>
			<div className={cl.text}>
				<Title>{title}</Title>
				<p className={cn(cl.des, cl.des_marg)}>{des}</p>
			</div>

			<InputCheckbox id={id} {...props} />
		</label>
	)
}

export default SettingsItemCheckbox
