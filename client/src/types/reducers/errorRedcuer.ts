export enum errorActionTypes {
	'SET_REGISTRATION_ERROR' = 'SET_REGISTRATION_ERROR',
	'SET_LOGIN_ERROR' = 'SET_LOGIN_ERROR',
	'SET_REFRESH_AUTH_ERROR' = 'SET_REFRESH_AUTH_ERROR',
}

export interface IState {
	registrationError: string[]
	loginError: string[]
	refreshAuthorizationError: string
}

export type setLoginErrorPayload = {
	messages: string[]
}

interface ISetLoginError {
	type: errorActionTypes.SET_LOGIN_ERROR
	payload: setLoginErrorPayload
}

export type setRegistrationErrorPayload = {
	messages: string[]
}

interface ISetRegistrationError {
	type: errorActionTypes.SET_REGISTRATION_ERROR
	payload: setRegistrationErrorPayload
}

export type setRefreshAuthErrorPayload = {
	message: string
}

interface ISetRefreshAuthError {
	type: errorActionTypes.SET_REFRESH_AUTH_ERROR
	payload: setRefreshAuthErrorPayload
}

export type IAction =
	| ISetLoginError
	| ISetRegistrationError
	| ISetRefreshAuthError
