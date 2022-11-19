import React, { ChangeEvent } from 'react'
// ==== Icons ====
import { allAdditionalIcons } from '../../global/IconsSpells'
import { theSets } from '../../global/theSets'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {
	changeBg,
	setDefaultBg,
	toggleVisibleSpellList,
} from '../../store/action-creators/theme'
// ==== Components ====
import SimpleBar from 'simplebar-react'
import SettingItemRadio from '../SettingItem/Radio'
import SettingsItemTextInput from '../SettingItem/TextInput'
import SettingsItemCheckbox from '../SettingItem/Checkbox'
import SettingsItemCheckboxGroup from '../SettingItem/CheckboxGroup'

const InterfaceSettings = () => {
	const dispatch = useDispatch()

	const { isHideSpellList, customBgUrl } = useTypedSelector(
		state => state.theme
	)

	const handleBgUrl = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(changeBg({ url: e.target.value }))
	}

	const handleSpellList = () => {
		dispatch(
			toggleVisibleSpellList({
				isHide: !isHideSpellList,
			})
		)
	}

	return (
		<SimpleBar autoHide={false} style={{ maxHeight: 550 }}>
			<SettingsItemTextInput
				id='custom-background-settings-item'
				title='Custom background'
				des='Paste a link to the new background  in this input field ( picture or gif )'
				hasResetBtn={true}
				resetFunction={() => dispatch(setDefaultBg())}
				placeholder='Paste a link here...'
				onChange={handleBgUrl}
				value={customBgUrl}
			/>

			<SettingsItemCheckbox
				id='settings-item-hide-spell-list'
				onChange={handleSpellList}
				checked={isHideSpellList}
				title='Hide the spell list'
				des='Click on me to hide or show of spells'
			/>

			<SettingItemRadio
				title='Change icon set'
				des='Select the icons you want to change from the suggestions'
				theSets={theSets}
			/>

			<SettingsItemCheckboxGroup
				title='Change additional icons'
				des='Select the icons you want to change from the suggestions'
				spellsIcons={allAdditionalIcons}
			/>


		</SimpleBar>
	)
}

export default InterfaceSettings
