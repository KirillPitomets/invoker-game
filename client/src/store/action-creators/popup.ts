import { PopUpActionTypes } from "../../types/reducers/popUpReducer"

export const hideMainPopUp = () => {
	return {type: PopUpActionTypes.MAIN_POPUP_HIDE}
}

export const showMainPopUp = () => {
	return {type: PopUpActionTypes.MAIN_POPUP_SHOW}
}

export const hideHotkeySwitchPopup = () => {
	return {type: PopUpActionTypes.HOTKEY_SWITCH_POPUP_HIDE}
}

export const showHotkeySwitchPopup = () => {
	return {type: PopUpActionTypes.HOTKEY_SWITCH_POPUP_SHOW}
}