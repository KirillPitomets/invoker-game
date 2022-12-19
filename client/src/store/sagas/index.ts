import { all } from 'redux-saga/effects'
// ==== Sagas ====
import { loginWatcher, registrationWatcher, checkAuthWatcher, logoutWatcher } from './AuthSaga'

export default function* rootSaga() {
	const sagas = [loginWatcher(), registrationWatcher(), checkAuthWatcher(), logoutWatcher()]

	yield all(sagas)
}