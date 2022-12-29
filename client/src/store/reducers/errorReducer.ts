import {
	IState,
	IAction,
	errorActionTypes,
} from '../../types/reducers/errorRedcuer'

const initialState: IState = {
	registrationError: [],
	loginError: [],
	refreshAuthorizationError: '',
	isServerWorking: true,
	usernameChangeError: '',
	userPasswordChangeError: '',
	uploadAvatarError: ''
}

export const errorReducer = (state = initialState, action: IAction): IState => {
	switch (action.type) {
		case errorActionTypes.SET_LOGIN_ERROR:
			return { ...state, loginError: action.payload.messages }
		case errorActionTypes.SET_REGISTRATION_ERROR:
			return { ...state, registrationError: action.payload.messages }
		case errorActionTypes.SET_REFRESH_AUTH_ERROR:
			return { ...state, refreshAuthorizationError: action.payload.message }
		case errorActionTypes.SET_IS_SERVER_WORKING:
			return { ...state, isServerWorking: action.payload.isWorking}
		case errorActionTypes.SET_USERNAME_CHANGE_ERROR:
			return { ...state, usernameChangeError: action.payload.message}
		case errorActionTypes.SET_PASSWORD_CHANGE_ERROR:
			return { ...state, userPasswordChangeError: action.payload.message}
		case errorActionTypes.SET_UPLOAD_AVATAR_ERROR:
			return {...state, uploadAvatarError: action.payload.message}
		default:
			return state
	}
}

