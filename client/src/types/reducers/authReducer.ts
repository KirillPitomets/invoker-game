import { IUser } from "../../models/IUser"

export enum authActionTypes {
	'LOGIN' = 'LOGIN',
	'REGISTRATION' = 'REGISTRATION',
	'LOGOUT' = 'LOGOUT',
	'REMOVE_USER_DATA' = 'REMOVE_USER_DATA',
	'CHECK_AUTH' = 'CHECK_AUTH',
	'UPDATE' = 'UPDATE',
	'SET_USER_DATA' = 'SET_USER_DATA',
	'SET_STATUS_LOADING' = 'SET_STATUS_LOADING',
	'SET_ERROR_LOGIN_MESSAGE' = 'SET_ERROR_LOGIN_MESSAGE',
	'SET_ERROR_REG_MESSAGE' = 'SET_ERROR_REG_MESSAGE',
	'SET_AUTH_STATUS' = 'SET_AUTH_STATUS',
	'SET_USER_AUTH_ERROR_MESSAGE' = 'SET_USER_AUTH_ERROR_MESSAGE'
}

export interface IState {
	user: IUser
	isAuth: boolean
	isLoading: boolean
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

interface ILogout {
	type: authActionTypes.LOGOUT
}

interface IRemoveUserData {
	type: authActionTypes.REMOVE_USER_DATA
}

export type IAction =
	| ILogin
	| IRegistration
	| IUpdate
	| ISetStatusLoading
	| ISetAuthStatus
	| ICheckAuth
	| ISetUserData
	| ILogout
	| IRemoveUserData