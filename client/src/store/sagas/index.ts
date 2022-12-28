import { all } from 'redux-saga/effects'
// ==== Sagas ====
import {
	loginWatcher,
	registrationWatcher,
	checkAuthWatcher,
	logoutWatcher,
	changePasswordWatcher,
	changeUsernameWatcher,
} from './UserSaga'

export default function* rootSaga() {
	const sagas = [
		loginWatcher(),
		registrationWatcher(),
		checkAuthWatcher(),
		logoutWatcher(),
		changePasswordWatcher(),
		changeUsernameWatcher(),
	]

	yield all(sagas)
}
