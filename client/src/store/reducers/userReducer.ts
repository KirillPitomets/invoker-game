import {
	IState,
	userActionTypes,
	IAction,
} from '../../types/reducers/userReducer'

const initialState: IState = {
	user: {
		username: '',
		avatar: '',
	},
	isAuth: false,
	isLoading: false,
}

export const userReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case userActionTypes.SET_STATUS_LOADING:
			return { ...state, isLoading: action.payload.isLoading }
		case userActionTypes.SET_AUTH_STATUS:
			return { ...state, isAuth: action.payload.isAuth }
		case userActionTypes.SET_USER_DATA:
			return { ...state, user: action.payload }
		case userActionTypes.REMOVE_USER_DATA: 
			return { ...state, user: initialState.user}
		default:
			return state
	}
}
