export enum errorActionTypes {
	'SET_REGISTRATION_ERROR' = 'SET_REGISTRATION_ERROR',
	'SET_LOGIN_ERROR' = 'SET_LOGIN_ERROR',
	'SET_REFRESH_AUTH_ERROR' = 'SET_REFRESH_AUTH_ERROR',
	'SET_IS_SERVER_WORKING' = 'SET_IS_SERVER_WORKING'
}

export interface IState {
	registrationError: string[]
	loginError: string[]
	refreshAuthorizationError: string
	isServerWorking: boolean
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

export type setIsServerWorkingPayload = {
	isWorking: boolean
}

interface ISetIsServerWorking {
	type: errorActionTypes.SET_IS_SERVER_WORKING
	payload: setIsServerWorkingPayload
}


export type IAction =
	| ISetLoginError
	| ISetRegistrationError
	| ISetRefreshAuthError
	| ISetIsServerWorking
