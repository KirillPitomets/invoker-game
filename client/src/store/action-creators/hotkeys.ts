import { IAction, ActionTypes, PayloadSetSpellName, PayloadChangeHotkey, PayloadSetIndxHotKey } from '../../types/reducers/hotkeysReducer';

export const setDisplayName = ( {displaySpellName}: PayloadSetSpellName): IAction => {
	return {type: ActionTypes.SET_SPELL_NAME, payload: { displaySpellName }}
}

export const changeHotKey = ({newHotKey}: PayloadChangeHotkey): IAction  => {
	return { type: ActionTypes.CHANGE_HOT_KEY, payload: {newHotKey}}
}

export const setIndxHotKey = ({indexHotKeyInObj}: PayloadSetIndxHotKey): IAction => {
	return { type: ActionTypes.SET_INDX_HOT_KEY_OBJ, payload: {indexHotKeyInObj}}
}

export const resetAllBinds = () => {
	return { type: ActionTypes.RESET_ALL_BINDS}
}