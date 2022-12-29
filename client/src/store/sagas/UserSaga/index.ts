import { setUploadAvatarError } from './../../action-creators/error'
import {
	setChangeUsernameError,
	setIsServerWorking,
} from '../../action-creators/error'
import { call, put, takeEvery } from 'redux-saga/effects'
import { store } from '../../index'
// ==== Axios ====
import axios, { AxiosError, AxiosResponse } from 'axios'
// ==== Action creators ====
import {
	setUserData,
	setAuthStatus,
	setStatusLoading,
	removeUserData,
} from '../../action-creators/user'
import {
	setLoginErrorMessages,
	setRegErrorMessages,
	setRefreshAuthErrorMessage,
	setChangePasswordError,
} from '../../action-creators/error'
// ==== Types ====
import {
	userActionTypes,
	IUpdatePassword,
	IUpdateUsername,
	IUploadAvatar,
	IRegistration,
	ILogin,
} from '../../../types/reducers/userReducer'
import { IDataServerError } from '../../../types/Sagas/AuthSaga'
import { IAuthResponse } from '../../../models/response/AuthResponse'
// ==== Service ====
import { UserService } from '../../../Services/UserService'
// ==== Models ====
import { IUser } from '../../../models/IUser'

const errorHandler = (errCode: string = '', cb: () => void) => {
	if (errCode === 'ERR_NETWORK') {
		// NETWORK ERROR // SERVER IS NOT WORKING
		store.dispatch(setIsServerWorking({ isWorking: false }))
	} else {
		cb()
	}
}

function* loginWorker({ payload }: ILogin) {
	try {
		const { username, password } = payload
		yield put(setStatusLoading({ isLoading: true }))
		const response: AxiosResponse<IAuthResponse> = yield call(
			UserService.login,
			{ username, password }
		)
		localStorage.setItem('token', response.data?.accessToken)

		yield put(
			setUserData({
				username: response.data.user.username,
				avatar: response.data.user.avatar,
			})
		)
		// Change server to working
		yield put(setIsServerWorking({ isWorking: true }))

		yield put(setAuthStatus({ isAuth: true }))
	} catch (err: any | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			errorHandler(err.code, () => {
				const errors = (err as AxiosError<IDataServerError>).response?.data
				if (errors?.errors) {
					const arrayOfErrors: string[] = [errors.message]

					for (let indx = 0; indx < errors?.errors.length; indx++) {
						arrayOfErrors.push(errors?.errors[indx].msg)
					}

					store.dispatch(setLoginErrorMessages({ messages: arrayOfErrors }))
				}
			})
		} else {
			yield put(
				setLoginErrorMessages({
					messages: ["I'm Sorry :) An unexpected error has occured"],
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

function* registrationWorker({ payload }: IRegistration) {
	try {
		yield put(setStatusLoading({ isLoading: true }))

		const { username, password, passwordConfirmation } = payload
		const response: AxiosResponse<IAuthResponse> = yield call(
			UserService.registration,
			{
				username,
				password,
				passwordConfirmation,
			}
		)
		localStorage.setItem('token', response.data.accessToken)
		yield put(setAuthStatus({ isAuth: true }))
		yield put(setUserData(response.data.user))

		// Change server to working
		yield put(setIsServerWorking({ isWorking: true }))
	} catch (err: unknown | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			errorHandler(err.code, () => {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data

				console.log(errors)

				if (errors?.errors) {
					const arrayOfErrors: string[] = [errors.message]

					for (let indx = 0; indx < errors?.errors.length; indx++) {
						arrayOfErrors.push(errors?.errors[indx].msg)
					}
					store.dispatch(setRegErrorMessages({ messages: arrayOfErrors }))
				}
			})
		} else {
			yield put(
				setRegErrorMessages({
					messages: ["I'm Sorry :) An unexpected error has occurred"],
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

function* checkAuthWorker() {
	try {
		yield put(setStatusLoading({ isLoading: true }))
		const response: AxiosResponse<IAuthResponse> = yield call(
			UserService.checkAuth
		)
		localStorage.setItem('token', response.data.accessToken)
		yield put(setUserData(response.data.user))
		yield put(setAuthStatus({ isAuth: true }))

		// Change server to working
		yield put(setIsServerWorking({ isWorking: true }))
	} catch (err: unknown | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			errorHandler(err.code, () => {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data!

				if (errors.message) {
					store.dispatch(
						setRefreshAuthErrorMessage({ message: errors.message })
					)
				}
			})
		} else {
			yield put(
				setRefreshAuthErrorMessage({
					message: "I'm Sorry :) An unexpected error has occurred",
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

function* logoutWorker() {
	try {
		yield call(UserService.logout)

		yield put(removeUserData())
		yield put(setAuthStatus({ isAuth: false }))
		yield localStorage.removeItem('token')
	} catch (err) {
		yield put(
			setRefreshAuthErrorMessage({
				message: "I'm Sorry :) An unexpected error has occurred",
			})
		)
	}
}

function* changePasswordWorker({ payload }: IUpdatePassword) {
	try {
		yield put(setStatusLoading({ isLoading: true }))

		const { password, passwordConfirmation } = payload
		yield call(UserService.changePassword, {
			password: password,
			passwordConfirmation,
		})
		yield put(setChangePasswordError({ message: '' }))
	} catch (err: unknown | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			errorHandler(err.code, () => {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data!

				if (errors.message) {
					store.dispatch(setChangePasswordError({ message: errors.message }))
				}
			})
		} else {
			yield put(
				setChangePasswordError({
					message: "I'm Sorry :) An unexpected error has occurred",
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

function* changeUsernameWorker({ payload }: IUpdateUsername) {
	try {
		yield put(setStatusLoading({ isLoading: true }))

		const { username } = payload
		const { data }: AxiosResponse<IUser> = yield call(
			UserService.changeUsername,
			{ username }
		)

		yield put(setUserData({ username: data?.username, avatar: data?.avatar }))

		yield put(setChangeUsernameError({ message: '' }))
	} catch (err: unknown | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			errorHandler(err.code, () => {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data!

				if (errors.message) {
					store.dispatch(setChangeUsernameError({ message: errors.message }))
				}
			})
		} else {
			yield put(
				setChangeUsernameError({
					message: "I'm Sorry :) An unexpected error has occurred",
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

function* uploadAvatar({ payload }: IUploadAvatar) {
	try {
		const { avatar } = payload

		const userData: IUser = yield call(UserService.uploadAvatar, { avatar })

		yield put(
			setUserData({ username: userData?.username, avatar: userData?.avatar })
		)

		yield put(setUploadAvatarError({ message: '' })) // Remove an error message
	} catch (err) {
		if (axios.isAxiosError(err)) {
			errorHandler(err.code, () => {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data!

				if (errors.message) {
					store.dispatch(setUploadAvatarError({ message: errors.message }))
				}
			})
		} else {
			yield put(
				setUploadAvatarError({
					message: "I'm Sorry :) An unexpected error has occurred",
				})
			)
		}
	}
}

// Watchers

export function* checkAuthWatcher() {
	yield takeEvery(userActionTypes.CHECK_AUTH, checkAuthWorker)
}

export function* loginWatcher() {
	yield takeEvery(userActionTypes.LOGIN, loginWorker)
}

export function* registrationWatcher() {
	yield takeEvery(userActionTypes.REGISTRATION, registrationWorker)
}

export function* logoutWatcher() {
	yield takeEvery(userActionTypes.LOGOUT, logoutWorker)
}

export function* changePasswordWatcher() {
	yield takeEvery(userActionTypes.UPDATE_PASSWORD, changePasswordWorker)
}

export function* changeUsernameWatcher() {
	yield takeEvery(userActionTypes.UPDATE_USERNAME, changeUsernameWorker)
}

export function* uploadAvatarWatcher() {
	yield takeEvery(userActionTypes.UPLOAD_AVATAR, uploadAvatar)
}
