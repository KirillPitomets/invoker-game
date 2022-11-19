export enum PopUpActionTypes {
	'SETTINGS_POPUP_SHOW' = 'SETTINGS_POPUP_SHOW',
	'SETTINGS_POPUP_HIDE' = 'SETTINGS_POPUP_HIDE',
	'HOTKEY_SWITCH_POPUP_SHOW' = 'HOTKEY_SWITCH_POPUP_SHOW',
	'HOTKEY_SWITCH_POPUP_HIDE' = 'HOTKEY_SWITCH_POPUP_HIDE',
}

export interface IState {
	isSettingsPopUpActive: boolean
	isHotkeySwitchPopUpActive: boolean
}

interface IActionShowSettingsPopUp {
	type: PopUpActionTypes.SETTINGS_POPUP_SHOW
}

interface IActionHideSettingsPopUp {
	type: PopUpActionTypes.SETTINGS_POPUP_HIDE
}

interface IActionShowHotkeySwitchPopUp {
	type: PopUpActionTypes.HOTKEY_SWITCH_POPUP_SHOW
}

interface IActionHideHotkeySwitchPopUp {
	type: PopUpActionTypes.HOTKEY_SWITCH_POPUP_HIDE
}

export type IAction =
	| IActionShowSettingsPopUp
	| IActionHideSettingsPopUp
	| IActionShowHotkeySwitchPopUp
	| IActionHideHotkeySwitchPopUp
