import { IUser } from "../../models/IUser"

export enum userActionTypes {
	'LOGIN' = 'LOGIN',
	'REGISTRATION' = 'REGISTRATION',
	'LOGOUT' = 'LOGOUT',
	'REMOVE_USER_DATA' = 'REMOVE_USER_DATA',
	'CHECK_AUTH' = 'CHECK_AUTH',
	'UPDATE_USERNAME' = 'UPDATE_USERNAME',
	'UPDATE_PASSWORD' = 'UPDATE_PASSWORD',
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
	type: userActionTypes.REGISTRATION
	payload: registrationPayload
}

export type loginPayload = {
	username: string
	password: string
}

interface ILogin {
	type: userActionTypes.LOGIN
	payload: loginPayload
}

export type updateUsernamePayload = {
	username: string
}

interface IUpdateUsername {
	type: userActionTypes.UPDATE_USERNAME
	payload: updateUsernamePayload
}

export type updatePasswordPayload = {
	password: string
	passwordConfirmation: string
}

interface IUpdatePassword {
	type: userActionTypes.UPDATE_PASSWORD
	payload: updatePasswordPayload
}

export type setStatusLoadingPayload = {
	isLoading: boolean
}

interface ISetStatusLoading {
	type: userActionTypes.SET_STATUS_LOADING
	payload: setStatusLoadingPayload
}

export type setAuthStatusPayload = {
	isAuth: boolean
}

interface ISetAuthStatus {
	type: userActionTypes.SET_AUTH_STATUS
	payload: setAuthStatusPayload
}

interface ICheckAuth {
	type: userActionTypes.CHECK_AUTH
}

export type setUserDataPayload = {
	username: string,
	avatar: string
}

interface ISetUserData {
	type: userActionTypes.SET_USER_DATA
	payload: IUser
}

interface ILogout {
	type: userActionTypes.LOGOUT
}

interface IRemoveUserData {
	type: userActionTypes.REMOVE_USER_DATA
}

export type IAction =
	| ILogin
	| IRegistration
	| IUpdateUsername
	| IUpdatePassword
	| ISetStatusLoading
	| ISetAuthStatus
	| ICheckAuth
	| ISetUserData
	| ILogout
	| IRemoveUserData