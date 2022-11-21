import { IUser } from '../../../models/IUser'
import { call, put, takeEvery } from 'redux-saga/effects'
// ==== Axios ====
import { AxiosError, AxiosResponse } from 'axios'
// ==== Action creators ====
import {
	setUserData,
	setAuthStatus,
	setLoginErrorMessage,
	setRegErrorMessage,
	setStatusLoading,
	setUserDataErrorMessage,
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
		console.log({
			username: response.data.user.username,
			avatar: response.data.user.avatar,
		})
		localStorage.setItem('token', response.data?.accessToken)

		yield put(
			setUserData({
				username: response.data.user.username,
				avatar: response.data.user.avatar,
			})
		)

		yield put(setAuthStatus({ isAuth: true }))
	} catch (err: any | AxiosError<IDataServerError>) {
		console.log(err)
		// yield put(setLoginErrorMessage({ message: err.response.data.message }))
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
	// try {
	// 	const { username, password, confirmationPassword } = payload
	// 	yield put(setStatusLoading({ isLoading: true }))
	// 	const token: IToken = yield call(UserService.registration, {
	// 		username,
	// 		password,
	// 		confirmationPassword,
	// 	})
	// 	localStorage.setItem('token', token.data.token)
	// 	yield put(setAuthStatus({ isAuth: true }))
	// 	yield put(setStatusLoading({ isLoading: false }))
	// } catch (err: unknown | AxiosError) {
	// 	yield put(setStatusLoading({ isLoading: false }))
	// 	if (axios.isAxiosError(err)) {
	// 		const msg: any = err.response?.data
	// 		yield put(setRegErrorMessage({ message: msg.message }))
	// 	} else {
	// 		console.log(err)
	// 	}
	// }
}

function* checkAuthWorker() {
	try {
		yield put( setStatusLoading({isLoading: true}))
		const response: AxiosResponse<IAuthResponse> = yield call(
			UserService.checkAuth
		)
		localStorage.setItem('token', response.data.accessToken)
		yield put(setUserData(response.data.user))
	} catch (err: unknown | AxiosError<IDataServerError>) {

		

	} finally {
		yield put( setStatusLoading({isLoading: false}))
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
