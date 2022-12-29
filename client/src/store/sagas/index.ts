import { all } from 'redux-saga/effects'
// ==== Sagas ====
import {
	loginWatcher,
	registrationWatcher,
	checkAuthWatcher,
	logoutWatcher,
	changePasswordWatcher,
	changeUsernameWatcher,
	uploadAvatarWatcher
} from './UserSaga'

export default function* rootSaga() {
	const sagas = [
		loginWatcher(),
		registrationWatcher(),
		checkAuthWatcher(),
		logoutWatcher(),
		changePasswordWatcher(),
		changeUsernameWatcher(),
		uploadAvatarWatcher()
	]

	yield all(sagas)
}
