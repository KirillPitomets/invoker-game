import {
	challengeActionTypes,
	IAction,
	IState,
} from '../../types/reducers/challengeReducer'

const initialState: IState = {
	isChallengeStarted: false,
	challengeDurationInSeconds: 10,
	activatedSpells: 0
}

export const challengeReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case challengeActionTypes.SET_CHALLENGE_IS_START:
			return { ...state, isChallengeStarted: true, activatedSpells: -1 }
		case challengeActionTypes.SET_CHALLENGE_IS_END:
			return { ...state, isChallengeStarted: false }
		case challengeActionTypes.CLEAR_ACTIVATED_SPELLS:
			return { ...state, activatedSpells: -1 }
		case challengeActionTypes.ADD_ACTIVATED_SPELL_TO_COUNT:
			return { ...state, activatedSpells: state.activatedSpells + 1 }
		default:
			return state
	}
}
