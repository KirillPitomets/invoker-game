import { IUser } from '../../models/IUser';
import {
	IAction,
	userActionTypes,
	loginPayload,
	setStatusLoadingPayload,
	setAuthStatusPayload,
	registrationPayload,
	updatePasswordPayload,
	updateUsernamePayload,
	uploadAvatarPayload
} from '../../types/reducers/userReducer'

export const setStatusLoading = (payload: setStatusLoadingPayload): IAction => {
	return { type: userActionTypes.SET_STATUS_LOADING, payload }
}

export const setAuthStatus = (payload: setAuthStatusPayload): IAction => {
	return { type: userActionTypes.SET_AUTH_STATUS, payload }
}

export const login = (payload: loginPayload): IAction => {
	return { type: userActionTypes.LOGIN, payload }
}

export const registration = (payload: registrationPayload): IAction => {
	return { type: userActionTypes.REGISTRATION, payload }
}

export const logout = (): IAction => {
	return { type: userActionTypes.LOGOUT }
}

export const checkAuth = (): IAction => {
	return { type: userActionTypes.CHECK_AUTH}
}

export const setUserData = (payload: IUser): IAction => {
	return { type: userActionTypes.SET_USER_DATA, payload }
}

export const removeUserData = (): IAction => {
	return { type: userActionTypes.REMOVE_USER_DATA}
}

export const changePassword = (payload: updatePasswordPayload): IAction => {
	return {type: userActionTypes.UPDATE_PASSWORD, payload}
}

export const changeUsername = (payload: updateUsernamePayload): IAction => {
	return {type: userActionTypes.UPDATE_USERNAME, payload}
}

export const uploadAvatar = (payload: uploadAvatarPayload): IAction => {
	return {type: userActionTypes.UPLOAD_AVATAR, payload}
}