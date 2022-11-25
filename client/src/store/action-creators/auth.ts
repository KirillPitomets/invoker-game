import { IUser } from './../../models/IUser';
import {
	IAction,
	authActionTypes,
	loginPayload,
	setStatusLoadingPayload,
	ErrorMessagePayload,
	setAuthStatusPayload,
	registrationPayload,
	UserAuthErrorPayload,

} from '../../types/reducers/authReducer'

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

export const login = (payload: loginPayload): IAction => {
	return { type: authActionTypes.LOGIN, payload }
}

export const registration = (payload: registrationPayload): IAction => {
	return { type: authActionTypes.REGISTRATION, payload }
}

export const checkAuth = (): IAction => {
	return { type: authActionTypes.CHECK_AUTH}
}

export const setUserData = (payload: IUser): IAction => {
	return { type: authActionTypes.SET_USER_DATA, payload }
}

export const setUserAuthErrorMessage = (
	payload: UserAuthErrorPayload
): IAction => {
	return { type: authActionTypes.SET_USER_AUTH_ERROR_MESSAGE, payload }
}
