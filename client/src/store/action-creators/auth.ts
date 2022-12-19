import { IUser } from './../../models/IUser';
import {
	IAction,
	authActionTypes,
	loginPayload,
	setStatusLoadingPayload,
	setAuthStatusPayload,
	registrationPayload,

} from '../../types/reducers/authReducer'
import { type } from 'os';

export const setStatusLoading = (payload: setStatusLoadingPayload): IAction => {
	return { type: authActionTypes.SET_STATUS_LOADING, payload }
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

export const logout = (): IAction => {
	return { type: authActionTypes.LOGOUT }
}

export const checkAuth = (): IAction => {
	return { type: authActionTypes.CHECK_AUTH}
}

export const setUserData = (payload: IUser): IAction => {
	return { type: authActionTypes.SET_USER_DATA, payload }
}

export const removeUserData = (): IAction => {
	return { type: authActionTypes.REMOVE_USER_DATA}
}