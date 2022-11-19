import {
	hotkeys as initialHotKeys,
	hotkeysTypeKeys,
} from '../../global/hotkeys'
// ==== Types ====
import { IAction, ActionTypes, IState } from '../../types/reducers/hotkeysReducer'
import { IHotKeys } from '../../types/hotkeys'


const setHotKeysToLocalStorage = (hotKeysObj: IHotKeys) => {
	let key: hotkeysTypeKeys
	for (key in hotKeysObj) {
		localStorage.setItem(`bind-${key}`, hotKeysObj[key])
	}
	localStorage.setItem('hotKeysChanged', '1')
}

const getHotKeysFromLocalStorage = (): IHotKeys | boolean => {
	let key: hotkeysTypeKeys
	let userHotKeys: any = {}

	if (!!!localStorage.getItem('hotKeysChanged')) return false

	for (key in initialHotKeys) {
		if (localStorage.getItem(`bind-${key}`)) {
			userHotKeys[key] = localStorage.getItem(`bind-${key}`)
		} else {
			userHotKeys[key] = ''
		}
	}

	return userHotKeys
}

const initialState: IState = {
	hotkeys: getHotKeysFromLocalStorage() || initialHotKeys,
	indxHotKeyObj: null,
	displaySpellName: '',
	hasHotKeysInLocalStorage: !!localStorage.getItem('hotKeysChanged')
}

export const hotkeyReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case ActionTypes.CHANGE_HOT_KEY:
			return (() => {
				const { newHotKey } = action.payload

				for (let key in state.hotkeys) {
					if (state.hotkeys[key] === newHotKey) {
						state.hotkeys[key] = ''
					}
				}

				const newHotKeyObj = {
					...state.hotkeys,
					[state.indxHotKeyObj!]: newHotKey,
				}
				setHotKeysToLocalStorage(newHotKeyObj)
				return { ...state, hotkeys: newHotKeyObj }
			})()
		case ActionTypes.SET_INDX_HOT_KEY_OBJ:
			return (() => {
				const { indexHotKeyInObj } = action.payload
				return { ...state, indxHotKeyObj: indexHotKeyInObj }
			})()
		case ActionTypes.SET_SPELL_NAME:
			return { ...state, displaySpellName: action.payload.displaySpellName }
		case ActionTypes.RESET_ALL_BINDS:
			setHotKeysToLocalStorage(initialHotKeys)
			return { ...state, hotkeys: initialHotKeys }
		default:
			return state
	}
}
