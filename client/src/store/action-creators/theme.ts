import {
	actionType,
	ActionTypes,
	changeBgPayload,
	changeIconsSetPayload,
	toggleVisibleSpellListPayload,
	changeIconsSpellsPayload,
} from '../../types/reducers/themeReducer'

export const changeBg = ({ url }: changeBgPayload): actionType => {
	return { type: ActionTypes.CHANGE_BG, payload: { url } }
}

export const setDefaultBg = (): actionType => {
	return { type: ActionTypes.SET_DEFAULT_BG }
}

export const toggleVisibleSpellList = ({
	isHide,
}: toggleVisibleSpellListPayload): actionType => {
	return { type: ActionTypes.TOGGLE_VISIBLE_SPELL_LIST, payload: { isHide } }
}

export const changeIconsSet = ({
	theSet,
}: changeIconsSetPayload): actionType => {
	return { type: ActionTypes.CHANGE_ICONS_SET, payload: { theSet } }
}

export const changeIconsSpells = ({
	nameOfTheSetSpellIcon,
}: changeIconsSpellsPayload): actionType => {
	return {
		type: ActionTypes.CHANGE_ICONS_SPELLS,
		payload: { nameOfTheSetSpellIcon },
	}
}
