import {
	IAction,
	challengeActionTypes,
} from '../../types/reducers/challengeReducer'

export const setStartedStatus = (): IAction => {
	return { type: challengeActionTypes.SET_CHALLENGE_IS_START }
}

export const setEndedStatus = (): IAction => {
	return { type: challengeActionTypes.SET_CHALLENGE_IS_END }
}

export const clearActivatedSpells = () => {
	return { type: challengeActionTypes.CLEAR_ACTIVATED_SPELLS }
}

export const addSpellToCount = () => {
	return { type: challengeActionTypes.ADD_ACTIVATED_SPELL_TO_COUNT }
}
