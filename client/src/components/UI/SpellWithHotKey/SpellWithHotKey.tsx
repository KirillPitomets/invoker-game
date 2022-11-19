import React, { FC, ImgHTMLAttributes } from 'react'
// ==== Types ====
import { hotkeysTypeKeys } from '../../../global/hotkeys'
// ==== Redux ====
import { showHotkeySwitchPopup } from '../../../store/action-creators/popup'
import {
	setDisplayName,
	setIndxHotKey,
} from '../../../store/action-creators/hotkeys'
import { useDispatch } from 'react-redux'
// ==== Utils ====
import { defineKey } from '../../../utils/defineKey'
// ==== Styles ====
import cl from './SpellWithHotKey.module.scss'
// ==== Components ====
import Spell from '../Spell/Spell'

export enum borderRadiusSideEnum {
	left,
	right,
}

export interface ISpellProps extends ImgHTMLAttributes<HTMLImageElement> {
	photoUrl: string
	isStaticPhoto?: boolean
	borderRadiusSide?: borderRadiusSideEnum
}

interface ISpellWithHotKey extends ISpellProps {
	name: string
	hotkey: string

	canChangeHotkey?: boolean
	indexInHotkeysObj?: hotkeysTypeKeys
}

const SpellWithHotKey: FC<ISpellWithHotKey> = ({
	hotkey,
	name,
	photoUrl,
	borderRadiusSide,
	canChangeHotkey = false,
	indexInHotkeysObj,
	isStaticPhoto,
	...props
}) => {
	const dispatch = useDispatch()

	const openHotKeyPopupAndSetDataForChangeHotkey = () => {
		dispatch(setDisplayName({ displaySpellName: name }))
		dispatch(setIndxHotKey({ indexHotKeyInObj: indexInHotkeysObj! }))
		dispatch(showHotkeySwitchPopup())
	}

	return (
		<div className={cl.block}>
			{canChangeHotkey && indexInHotkeysObj ? (
				<button
					className={cl.btn}
					onClick={openHotKeyPopupAndSetDataForChangeHotkey}
				>
					{defineKey(hotkey)}
				</button>
			) : (
				<p className={cl.text}>{defineKey(hotkey)}</p>
			)}
			<Spell
				image={photoUrl}
				borderRadiusSide={borderRadiusSide}
				alt={name}
				{...props}
			/>
		</div>
	)
}

export default SpellWithHotKey
