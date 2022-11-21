import React, { useEffect } from 'react'
// ==== hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './App.module.scss'
// ==== Types ====
import { authActionTypes } from '../../types/reducers/authReducer'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { checkAuth } from '../../store/action-creators/auth'
// ==== Components ====
import Container from '../Container'
import Avatar from '../Avatar'
import UserNickName from '../UserNickName/UserNickName'
import Header from '../Header'
import PopUp from '../PopUp'
import GameScene from '../GameScene'
import Notification, { stylesNotification } from '../Notification'

const App = () => {
	const { user, userDataErrMessage } = useTypedSelector(state => state.auth)
	const { customBgUrl, isHideSpellList } = useTypedSelector(
		state => state.theme
	)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkAuth())
	}, [])

	return (
		<div className={cl.app}>
			<PopUp />
			<Header />
			{userDataErrMessage ? (
				<Notification styleNotification={stylesNotification.error} title={userDataErrMessage} />
			) : null}

			<Notification styleNotification={stylesNotification.error} title={userDataErrMessage} />

			<div
				className={cl.bg}
				style={customBgUrl ? { backgroundImage: `url(${customBgUrl})` } : {}}
			></div>

			<Container>
				<div className={cl.avatar}>
					<Avatar name={user.username} photoUrl={user.avatar} />
					<UserNickName
						name={user.username || 'Login / Register'}
						className={cl['user-name_marg']}
					/>
				</div>

				<GameScene />
			</Container>
		</div>
	)
}

export default App
