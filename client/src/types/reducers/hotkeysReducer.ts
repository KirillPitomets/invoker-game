import { hotkeysTypeKeys, hotkeys } from '../../global/hotkeys'

export enum ActionTypes {
	'CHANGE_HOT_KEY' = 'CHANGE_HOT_KEY',
	'SET_INDX_HOT_KEY_OBJ' = 'SET_INDX_HOT_KEY_OBJ',
	'SET_SPELL_NAME' = 'SET_SPELL_NAME',
	'RESET_ALL_BINDS' = 'RESET_ALL_BINDS',
}

export interface IState {
	hotkeys: any
	indxHotKeyObj: hotkeysTypeKeys | null
	displaySpellName: string
	hasHotKeysInLocalStorage: boolean
}

export type PayloadChangeHotkey = {
	newHotKey: string
}

interface IChangeHotKey {
	type: ActionTypes.CHANGE_HOT_KEY
	payload: PayloadChangeHotkey
}

export type PayloadSetSpellName = {
	displaySpellName: string
}

interface ISetSpellName {
	type: ActionTypes.SET_SPELL_NAME
	payload: PayloadSetSpellName
}

export type PayloadSetIndxHotKey = {
	indexHotKeyInObj: hotkeysTypeKeys
}

interface ISetIndxHotKeyObj {
	type: ActionTypes.SET_INDX_HOT_KEY_OBJ
	payload: PayloadSetIndxHotKey
}

interface IResetAllBinds {
	type: ActionTypes.RESET_ALL_BINDS,
}

export type IAction = IChangeHotKey | ISetSpellName | ISetIndxHotKeyObj | IResetAllBinds
