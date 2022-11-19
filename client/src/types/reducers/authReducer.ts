export enum authActionTypes {
	'LOGIN' = 'LOGIN',
	'REGISTRATION' = 'REGISTRATION',
	'GET_USER' = 'GET_USER',
	'UPDATE' = 'UPDATE',
	'SAVE_USER_DATA' = 'SAVE_USER_DATA',
	'SET_STATUS_LOADING' = 'SET_STATUS_LOADING',
	'SET_ERROR_LOGIN_MESSAGE' = 'SET_ERROR_LOGIN_MESSAGE',
	'SET_ERROR_REG_MESSAGE' = 'SET_ERROR_REG_MESSAGE',
	'SET_AUTH_STATUS' = 'SET_AUTH_STATUS',
	'SET_USER_DATA_ERROR_MESSAGE' = 'SET_USER_DATA_ERROR_MESSAGE'
}

export interface IUser {
	username: string
	avatar: string
}

export type errMessagesType = {
	reg: string
	login: string
}

export interface IState {
	user: IUser
	isAuth: boolean
	isLoading: boolean
	errMessages: errMessagesType
	userDataErrMessage: string 
}

export type registrationPayload = {
	username: string
	password: string
	confirmationPassword: string
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
	message: string
}

interface ISetRegErrorMessage {
	type: authActionTypes.SET_ERROR_REG_MESSAGE
	payload: ErrorMessagePayload
}

interface ISetLoginErrorMessage {
	type: authActionTypes.SET_ERROR_LOGIN_MESSAGE
	payload: ErrorMessagePayload
}

interface ISetUserDataErrorMessage {
	type: authActionTypes.SET_USER_DATA_ERROR_MESSAGE
	payload: ErrorMessagePayload
}

export type setAuthStatusPayload = {
	isAuth: boolean
}

interface ISetAuthStatus {
	type: authActionTypes.SET_AUTH_STATUS
	payload: setAuthStatusPayload
}

interface IGetUser {
	type: authActionTypes.GET_USER
}

export type saveUserDataPayload = {
	username: string
	avatar: string
}

interface ISaveUserData {
	type: authActionTypes.SAVE_USER_DATA
	payload: saveUserDataPayload
}



export type IAction =
	| ILogin
	| IRegistration
	| IUpdate
	| ISetStatusLoading
	| ISetRegErrorMessage
	| ISetLoginErrorMessage
	| ISetAuthStatus
	| IGetUser
	| ISaveUserData
	| ISetUserDataErrorMessage
