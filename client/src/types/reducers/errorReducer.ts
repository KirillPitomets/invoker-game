export enum errorActionTypes {
	'SET_REGISTRATION_ERROR' = 'SET_REGISTRATION_ERROR',
	'SET_LOGIN_ERROR' = 'SET_LOGIN_ERROR',
	'SET_REFRESH_AUTH_ERROR' = 'SET_REFRESH_AUTH_ERROR',
	'SET_IS_SERVER_WORKING' = 'SET_IS_SERVER_WORKING',
	'SET_USERNAME_CHANGE_ERROR' = 'SET_USERNAME_CHANGE_ERROR',
	'SET_PASSWORD_CHANGE_ERROR' = 'SET_PASSWORD_CHANGE_ERROR',
	'SET_UPLOAD_AVATAR_ERROR' = 'SET_UPLOAD_AVATAR_ERROR'
}

export interface IState {
	registrationError: string[]
	loginError: string[]
	refreshAuthorizationError: string
	isServerWorking: boolean
	usernameChangeError: string,
	userPasswordChangeError: string
	uploadAvatarError: string
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

export type changeUsernameErrorPayload = {
	message: string
}

interface setChangeUsernameError {
	type: errorActionTypes.SET_USERNAME_CHANGE_ERROR,
	payload: changeUsernameErrorPayload
}

export type changePasswordErrorPayload = {
	message: string
}

interface setChangePasswordError {
	type: errorActionTypes.SET_PASSWORD_CHANGE_ERROR,
	payload: changePasswordErrorPayload
}

export type setUploadAvatarErrorPayload = {
	message: string
}

interface setUploadAvatarError {
	type: errorActionTypes.SET_UPLOAD_AVATAR_ERROR
	payload: setUploadAvatarErrorPayload
}

export type IAction =
	| ISetLoginError
	| ISetRegistrationError
	| ISetRefreshAuthError
	| ISetIsServerWorking
	| setChangeUsernameError
	| setChangePasswordError
	| setUploadAvatarError