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
}

export const authReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case authActionTypes.SET_STATUS_LOADING:
			return { ...state, isLoading: action.payload.isLoading }
		case authActionTypes.SET_AUTH_STATUS:
			return { ...state, isAuth: action.payload.isAuth }
		case authActionTypes.SET_USER_DATA:
			return { ...state, user: action.payload }
		case authActionTypes.REMOVE_USER_DATA: 
			return { ...state, user: initialState.user}
		default:
			return state
	}
}
