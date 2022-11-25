import { IAction, IState, PopUpActionTypes } from '../../types/reducers/popUpReducer'

const initialState: IState = {
	isMainPopUpActive: false,
	isHotkeySwitchPopUpActive: false
}

export const popUpReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case PopUpActionTypes.MAIN_POPUP_SHOW:
			return { ...state, isMainPopUpActive: true }
		case PopUpActionTypes.MAIN_POPUP_HIDE:
			return { ...state, isMainPopUpActive: false }
		case PopUpActionTypes.HOTKEY_SWITCH_POPUP_SHOW:
			return { ...state, isHotkeySwitchPopUpActive: true }
		case PopUpActionTypes.HOTKEY_SWITCH_POPUP_HIDE:
			return { ...state, isHotkeySwitchPopUpActive: false }
		default:
			return state
	}
}
