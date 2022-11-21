import { all } from 'redux-saga/effects'
// ==== Sagas ====
import { loginWatcher, registrationWatcher, checkAuth } from './AuthSaga'

export default function* rootSaga() {
	const sagas = [loginWatcher(), registrationWatcher(), checkAuth()]

	yield all(sagas)
}