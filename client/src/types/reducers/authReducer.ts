export enum authActionTypes {
	'LOGIN' = 'LOGIN',
	'REGISTRATION' = 'REGISTRATION',
	'CHECK_AUTH' = 'CHECK_AUTH',
	'UPDATE' = 'UPDATE',
	'SET_USER_DATA' = 'SET_USER_DATA',
	'SET_STATUS_LOADING' = 'SET_STATUS_LOADING',
	'SET_ERROR_LOGIN_MESSAGE' = 'SET_ERROR_LOGIN_MESSAGE',
	'SET_ERROR_REG_MESSAGE' = 'SET_ERROR_REG_MESSAGE',
	'SET_AUTH_STATUS' = 'SET_AUTH_STATUS',
	'SET_USER_AUTH_ERROR_MESSAGE' = 'SET_USER_AUTH_ERROR_MESSAGE'
}

export interface IUser {
	username: string
	avatar: string
}

export type errMessagesType = {
	reg: string[]
	login: string[]
}

export interface IState {
	user: IUser
	isAuth: boolean
	isLoading: boolean
	errMessages: errMessagesType
	userAuthErrMessage: string 
}

export type registrationPayload = {
	username: string
	password: string
	passwordConfirmation: string
}

interface IRegistration {
	type: authActionTypes.REGISTRATION
	payload: registrationPayload
}

export type loginPayload = {
	username: string
	password: string
}

interface ILogin {
	type: authActionTypes.LOGIN
	payload: loginPayload
}

interface IUpdate {
	type: authActionTypes.UPDATE
}

export type setStatusLoadingPayload = {
	isLoading: boolean
}

interface ISetStatusLoading {
	type: authActionTypes.SET_STATUS_LOADING
	payload: setStatusLoadingPayload
}

export type ErrorMessagePayload = {
	message: string[]
}

interface ISetRegErrorMessage {
	type: authActionTypes.SET_ERROR_REG_MESSAGE
	payload: ErrorMessagePayload
}

interface ISetLoginErrorMessage {
	type: authActionTypes.SET_ERROR_LOGIN_MESSAGE
	payload: ErrorMessagePayload
}

export type UserAuthErrorPayload = {
	message: string
}

interface ISetUserAuthErrorMessage {
	type: authActionTypes.SET_USER_AUTH_ERROR_MESSAGE
	payload: UserAuthErrorPayload
}

export type setAuthStatusPayload = {
	isAuth: boolean
}

interface ISetAuthStatus {
	type: authActionTypes.SET_AUTH_STATUS
	payload: setAuthStatusPayload
}

interface ICheckAuth {
	type: authActionTypes.CHECK_AUTH
}

export type setUserDataPayload = {
	username: string,
	avatar: string
}

interface ISetUserData {
	type: authActionTypes.SET_USER_DATA
	payload: IUser
}

export type IAction =
	| ILogin
	| IRegistration
	| IUpdate
	| ISetStatusLoading
	| ISetRegErrorMessage
	| ISetLoginErrorMessage
	| ISetAuthStatus
	| ICheckAuth
	| ISetUserData
	| ISetUserAuthErrorMessage
