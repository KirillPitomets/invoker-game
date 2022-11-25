import { IUser } from './../../../models/IUser'
import { call, put, takeEvery } from 'redux-saga/effects'
// ==== Axios ====
import axios, { AxiosError, AxiosResponse } from 'axios'
// ==== Action creators ====
import {
	setUserData,
	setAuthStatus,
	setLoginErrorMessage,
	setRegErrorMessage,
	setStatusLoading,
	setUserAuthErrorMessage,
} from '../../action-creators/auth'
// ==== Types ====
import {
	authActionTypes,
	loginPayload,
} from '../../../types/reducers/authReducer'
import { IDataServerError } from '../../../types/Sagas/AuthSaga'
import { IAuthResponse } from '../../../models/response/AuthResponse'
import { registrationPayload } from '../../../types/reducers/authReducer'
// ==== Service ====
import { UserService } from '../../../Services/UserService'

function* loginWorker({
	payload,
}: {
	type: authActionTypes
	payload: loginPayload
}) {
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

		yield put(setAuthStatus({ isAuth: true }))
	} catch (err: any | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			if (err.code === 'ERR_NETWORK') {
				// NETWORK ERROR // SERVER IS NOT WORKING
				yield put(
					setUserAuthErrorMessage({ message: 'The server is down. Try later' })
				)
			} else {
				const errors = (err as AxiosError<IDataServerError>).response?.data
				if (errors?.errors) {
					const arrayOfErrors: string[] = [errors.message]

					for (let indx = 0; indx < errors?.errors.length; indx++) {
						arrayOfErrors.push(errors?.errors[indx].msg)
					}

					yield put(setLoginErrorMessage({ message: arrayOfErrors }))
				}
			}
		} else {
			yield put(
				setLoginErrorMessage({
					message: ["I'm Sorry :) An unexpected error has occured"],
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

function* registrationWorker({
	payload,
}: {
	type: authActionTypes
	payload: registrationPayload
}) {
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
	} catch (err: unknown | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			if (err.code === 'ERR_NETWORK') {
				// NETWORK ERROR // SERVER ISN'T WORKING
				yield put(
					setUserAuthErrorMessage({ message: 'The server is down. Try later' })
				)
			} else {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data

				if (errors?.errors) {
					const arrayOfErrors: string[] = [errors.message]

					for (let indx = 0; indx < errors?.errors.length; indx++) {
						arrayOfErrors.push(errors?.errors[indx].msg)
					}

					yield put(setRegErrorMessage({ message: arrayOfErrors }))
				}
			}
		} else {
			yield put(
				setRegErrorMessage({
					message: ["I'm Sorry :) An unexpected error has occured"],
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
	} catch (err: unknown | AxiosError<IDataServerError>) {
		if (axios.isAxiosError(err)) {
			if (err.code === 'ERR_NETWORK') {
				// NETWORK ERROR // SERVER ISN'T WORKING
				yield put(
					setUserAuthErrorMessage({ message: 'The server is down. Try later' })
				)
			} else {
				const errors: IDataServerError | undefined = (
					err as AxiosError<IDataServerError>
				).response?.data!

				if (errors.message) {
					yield put(setUserAuthErrorMessage({ message: errors.message }))
				}
			}
		} else {
			yield put(
				setUserAuthErrorMessage({
					message: "I'm Sorry :) An unexpected error has occured",
				})
			)
		}
	} finally {
		yield put(setStatusLoading({ isLoading: false }))
	}
}

// Watchers

export function* checkAuth() {
	yield takeEvery(authActionTypes.CHECK_AUTH, checkAuthWorker)
}

export function* loginWatcher() {
	yield takeEvery(authActionTypes.LOGIN, loginWorker)
}

export function* registrationWatcher() {
	yield takeEvery(authActionTypes.REGISTRATION, registrationWorker)
}
