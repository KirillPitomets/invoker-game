import { PopUpActionTypes } from "../../types/reducers/popUpReducer"

export const hideSettingsPopup = () => {
	return {type: PopUpActionTypes.SETTINGS_POPUP_HIDE}
}

export const showSettingsPopup = () => {
	return {type: PopUpActionTypes.SETTINGS_POPUP_SHOW}
}

export const hideHotkeySwitchPopup = () => {
	return {type: PopUpActionTypes.HOTKEY_SWITCH_POPUP_HIDE}
}

export const showHotkeySwitchPopup = () => {
	return {type: PopUpActionTypes.HOTKEY_SWITCH_POPUP_SHOW}
}