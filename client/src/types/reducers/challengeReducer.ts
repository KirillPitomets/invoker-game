export enum challengeActionTypes {
	'SET_CHALLENGE_IS_START' = 'SET_CHALLENGE_IS_START',
	'SET_CHALLENGE_IS_END' = 'SET_CHALLENGE_IS_END',
	'ADD_ACTIVATED_SPELL_TO_COUNT' = 'ADD_ACTIVATED_SPELL_TO_COUNT',
	'CLEAR_ACTIVATED_SPELLS' = 'CLEAR_ACTIVATED_SPELLS',
}

export interface IState {
	isChallengeStarted: boolean
	challengeDurationInSeconds: number
	activatedSpells: number
}

interface IActionSetStartedStatus {
	type: challengeActionTypes.SET_CHALLENGE_IS_START
}

interface IActionSetEndedStatus {
	type: challengeActionTypes.SET_CHALLENGE_IS_END
}

interface IActionAddActivatedSpellToCount {
	type: challengeActionTypes.ADD_ACTIVATED_SPELL_TO_COUNT
}

interface IActionClearActivatedSpells {
	type: challengeActionTypes.CLEAR_ACTIVATED_SPELLS
}

export type IActionToggleTheFirstFollowingSpellPayload = {
	hasFirstFollowingSpell: boolean
}

export type IAction =
	| IActionSetStartedStatus
	| IActionSetEndedStatus
	| IActionAddActivatedSpellToCount
	| IActionClearActivatedSpells
