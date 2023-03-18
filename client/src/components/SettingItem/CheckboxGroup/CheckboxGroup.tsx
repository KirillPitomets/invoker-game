import React, { FC } from 'react'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { changeIconsSpells } from '../../../store/action-creators/theme'
// ==== Types ====
import { ISpellIcon, spellIconsEnum } from '../../../types/themes/spellIcons'
import { ISettingItem } from '../types'
// ==== Styles ====
import cl from '../SettingItem.module.scss'
import cn from 'classnames'
// ==== Components ====
import Title from '../../UI/Title'
import InputCheckbox from '../../UI/InputCheckbox'

interface ICheckboxGroup extends ISettingItem {
	spellsIcons: ISpellIcon[]
}

const CheckboxGroup: FC<ICheckboxGroup> = ({ title, des, spellsIcons }) => {
	const dispatch = useDispatch()
	const { activeSpellIcons } = useTypedSelector(state => state.theme)

	const defineIsActiveCheckbox = (icon: ISpellIcon): boolean => {
		return activeSpellIcons?.includes(icon.id) ? true : false
	}

	const handleSwitchActiveSpellIcons = (spellName: spellIconsEnum) => {
		dispatch(changeIconsSpells({ nameOfTheSetSpellIcon: spellName }))
	}

	return (
		<div className={cn(cl.item, cl.item_pad, cl.item_marg)}>
			<Title>{title}</Title>
			<p className={cn(cl.des, cl.des_marg)}>{des}</p>

			<div className={cl['wrapper_marg']}>
				{spellsIcons.map(item => (
					<div
						key={`checkboxGroup-${item.id}`}
						className={cn(cl.option, cl['option_marg'], cl['option_pad'])}
						onClick={() => handleSwitchActiveSpellIcons(item.id)}
					>
						<div className={cl.content}>
							<h4>{item.name}</h4>

							<div className={cl.content__wrapper}>
								{item.imgs.map(img => (
									<img
										key={`checkboxgroup-${img}`}
										className={cn(cl.picture, cl['picture_marg'])}
										src={img}
									/>
								))}
							</div>
						</div>

						<InputCheckbox checked={defineIsActiveCheckbox(item)} />
					</div>
				))}
			</div>
		</div>
	)
}

export default CheckboxGroup
