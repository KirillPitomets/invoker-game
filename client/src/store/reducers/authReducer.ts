import {
	IState,
	authActionTypes,
	IAction,
} from '../../types/reducers/authReducer'

const initialState: IState = {
	user: {
		username: '',
		avatar: '',
	},
	isAuth: false,
	isLoading: false,
	errMessages: { reg: '', login: '' },
	userDataErrMessage: '',
}

export const authReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case authActionTypes.SET_STATUS_LOADING:
			return { ...state, isLoading: action.payload.isLoading }

		case authActionTypes.SET_ERROR_REG_MESSAGE:
			return {
				...state,
				errMessages: { ...state.errMessages, reg: action.payload.message },
			}

		case authActionTypes.SET_ERROR_LOGIN_MESSAGE:
			return {
				...state,
				errMessages: { ...state.errMessages, login: action.payload.message },
			}

		case authActionTypes.SET_AUTH_STATUS:
			return { ...state, isAuth: action.payload.isAuth }

		case authActionTypes.SET_USER_DATA:
			return { ...state, user: action.payload }

		case authActionTypes.SET_USER_DATA_ERROR_MESSAGE:
			return { ...state, userDataErrMessage: action.payload.message }

		default:
			return state
	}
}
