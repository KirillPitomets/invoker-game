import { combineReducers } from "redux";
// ==== Reducers ====
import { errorReducer } from './errorReducer';
import { spellReducer } from "./spellReducer";
import { challengeReducer } from './challengeReducer';
import { popUpReducer } from "./popUpReducer";
import { recordReducer } from "./recordReducer";
import { themeReducer } from "./themeReducer"
import { hotkeyReducer } from './hotkeysReducer';
import { authReducer } from './authReducer'


export const rootReducer = combineReducers({
	spell: spellReducer,
	challenge: challengeReducer,
	popUp: popUpReducer,
	records: recordReducer,
	theme: themeReducer,
	hotkeys: hotkeyReducer,
	auth: authReducer,
	error: errorReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>