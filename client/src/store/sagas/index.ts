import { all } from 'redux-saga/effects'
// ==== Sagas ====
import { loginWatcher, registrationWatcher } from './authSaga'

export default function* rootSaga() {
	const sagas = [loginWatcher(), registrationWatcher()]

	yield all(sagas)
}