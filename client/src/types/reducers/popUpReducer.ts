export enum PopUpActionTypes {
	'MAIN_POPUP_SHOW' = 'MAIN_POPUP_SHOW',
	'MAIN_POPUP_HIDE' = 'MAIN_POPUP_HIDE',
	'HOTKEY_SWITCH_POPUP_SHOW' = 'HOTKEY_SWITCH_POPUP_SHOW',
	'HOTKEY_SWITCH_POPUP_HIDE' = 'HOTKEY_SWITCH_POPUP_HIDE',
}

export interface IState {
	isMainPopUpActive: boolean
	isHotkeySwitchPopUpActive: boolean
}

interface IActionShowSettingsPopUp {
	type: PopUpActionTypes.MAIN_POPUP_SHOW
}

interface IActionHideSettingsPopUp {
	type: PopUpActionTypes.MAIN_POPUP_HIDE
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
