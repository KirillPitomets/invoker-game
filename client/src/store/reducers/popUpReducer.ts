import { IAction, IState, PopUpActionTypes } from '../../types/reducers/popUpReducer'

const initialState: IState = {
	isSettingsPopUpActive: false,
	isHotkeySwitchPopUpActive: false
}

export const popUpReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case PopUpActionTypes.SETTINGS_POPUP_SHOW:
			return { ...state, isSettingsPopUpActive: true }
		case PopUpActionTypes.SETTINGS_POPUP_HIDE:
			return { ...state, isSettingsPopUpActive: false }
		case PopUpActionTypes.HOTKEY_SWITCH_POPUP_SHOW:
			return { ...state, isHotkeySwitchPopUpActive: true }
		case PopUpActionTypes.HOTKEY_SWITCH_POPUP_HIDE:
			return { ...state, isHotkeySwitchPopUpActive: false }
		default:
			return state
	}
}
