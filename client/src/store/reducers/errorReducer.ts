import {
	IState,
	IAction,
	errorActionTypes,
} from '../../types/reducers/errorRedcuer'

const initialState: IState = {
	registrationError: [],
	loginError: [],
	refreshAuthorizationError: '',
}

export const errorReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case errorActionTypes.SET_LOGIN_ERROR:
			return { ...state, loginError: action.payload.messages }
		case errorActionTypes.SET_REGISTRATION_ERROR:
			return { ...state, registrationError: action.payload.messages }
		case errorActionTypes.SET_REFRESH_AUTH_ERROR:
			return { ...state, refreshAuthorizationError: action.payload.message }
		default:
			return state
	}
}