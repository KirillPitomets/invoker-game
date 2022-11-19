import {
	IAction,
	authActionTypes,
	loginPayload,
	setStatusLoadingPayload,
	ErrorMessagePayload,
	setAuthStatusPayload,
	registrationPayload,
	saveUserDataPayload,
} from '../../types/reducers/authReducer'

export const login = (payload: loginPayload): IAction => {
	return { type: authActionTypes.LOGIN, payload }
}

export const setStatusLoading = (payload: setStatusLoadingPayload): IAction => {
	return { type: authActionTypes.SET_STATUS_LOADING, payload }
}

export const setRegErrorMessage = (payload: ErrorMessagePayload): IAction => {
	return { type: authActionTypes.SET_ERROR_REG_MESSAGE, payload }
}

export const setLoginErrorMessage = (payload: ErrorMessagePayload): IAction => {
	return { type: authActionTypes.SET_ERROR_LOGIN_MESSAGE, payload }
}

export const setAuthStatus = (payload: setAuthStatusPayload): IAction => {
	return { type: authActionTypes.SET_AUTH_STATUS, payload }
}

export const registration = (payload: registrationPayload): IAction => {
	return { type: authActionTypes.REGISTRATION, payload }
}

export const getUser = (): IAction => {
	return { type: authActionTypes.GET_USER }
}

export const saveUserData = (payload: saveUserDataPayload): IAction => {
	return { type: authActionTypes.SAVE_USER_DATA, payload }
}

export const setUserDataErrorMessage = (payload: ErrorMessagePayload ): IAction => {
	return { type: authActionTypes.SET_USER_DATA_ERROR_MESSAGE, payload}
}