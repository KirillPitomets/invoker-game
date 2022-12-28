import {
	errorActionTypes,
	IAction,
	setLoginErrorPayload,
	setRegistrationErrorPayload,
	setRefreshAuthErrorPayload,
	setIsServerWorkingPayload,
	changePasswordErrorPayload,
	changeUsernameErrorPayload
} from '../../types/reducers/errorRedcuer'

export const setRegErrorMessages = (
	payload: setRegistrationErrorPayload
): IAction => {
	return { type: errorActionTypes.SET_REGISTRATION_ERROR, payload }
}

export const setLoginErrorMessages = (
	payload: setLoginErrorPayload
): IAction => {
	return { type: errorActionTypes.SET_LOGIN_ERROR, payload }
}
export const setRefreshAuthErrorMessage = (
	payload: setRefreshAuthErrorPayload
): IAction => {
	return { type: errorActionTypes.SET_REFRESH_AUTH_ERROR, payload }
}

export const setIsServerWorking = (
	payload: setIsServerWorkingPayload
): IAction => {
	return { type: errorActionTypes.SET_IS_SERVER_WORKING, payload }
}

export const setChangeUsernameError = (payload: changeUsernameErrorPayload): IAction => {
	return { type: errorActionTypes.SET_USERNAME_CHANGE_ERROR, payload}
}

export const setChangePasswordError = (payload: changePasswordErrorPayload): IAction => {
	return { type: errorActionTypes.SET_PASSWORD_CHANGE_ERROR, payload}
}