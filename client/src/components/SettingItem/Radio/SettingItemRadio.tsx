import React, { FC } from 'react'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { changeIconsSet } from '../../../store/action-creators/theme'
// ==== Types ====
import { ISettingItem } from '../types'
import { ISet } from '../../../global/theSets'
import { iconSetsEnum } from '../../../types/themes/theSets'
// ==== Styles ====
import cl from '../SettingItem.module.scss'
import cn from 'classnames'
// ==== Components ====
import Title from '../../UI/Title'
import InputRadio from '../../UI/InputRadio'

interface ISettingItemRadio extends ISettingItem {
	theSets?: ISet[]
}

const SettingItemRadio: FC<ISettingItemRadio> = ({ title, des, theSets }) => {
	const dispatch = useDispatch()
	const { iconSet } = useTypedSelector(state => state.theme)

	const handleIconsSet = (id: iconSetsEnum) => {
		dispatch(changeIconsSet({ theSet: id }))
	}

	return (
		<div className={cn(cl.item, cl.item_pad, cl.item_marg)}>
			<Title>{title}</Title>
			<p className={cn(cl.des, cl.des_marg)}>{des}</p>

			<div className={cl.wrapper_marg}>
				{theSets?.map(theSet => (
					<div
						key={`settings item radio ${theSet.id}`}
						className={cn(cl.option, cl['option_marg'], cl['option_pad'])}
						onClick={() => handleIconsSet(theSet.id)}
					>
						<div className={cl.content}>
							<h4>{theSet.title}</h4>

							<div>
							{theSet.imgs.map(picture => (
								<img
									key={`settings item radio img ${picture}`}
									className={cn(cl.picture, cl.picture_marg)}
									src={picture}
								/>
							))}
							</div>
						</div>

						<InputRadio isActive={iconSet === theSet.id} />
					</div>
				))}
			</div>
		</div>
	)
}

export default SettingItemRadio



