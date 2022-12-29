import React, { useEffect, useState } from 'react'
// ==== hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './App.module.scss'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { checkAuth } from '../../store/action-creators/user'
// ==== Components ====
import Container from '../Container'
import Avatar from '../Avatar'
import UserNickName from '../UserNickName'
import Header from '../Header'
import GameScene from '../GameScene'
import Notification, { animations, stylesNotification } from '../Notification'
import MainPopUp from '../MainPopUp'

const App = () => {
	const { user } = useTypedSelector(state => state.user)
	const { customBgUrl } = useTypedSelector(state => state.theme)
	const { refreshAuthorizationError, isServerWorking } = useTypedSelector(state => state.error)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(checkAuth())
	}, [])

	return (
		<div className={cl.app}>
			<MainPopUp />

			<Header />

			<div
				className={cl.bg}
				style={customBgUrl ? { backgroundImage: `url(${customBgUrl})` } : {}}
			></div>

			<Container className={cl['container_overflow-hidden']}>
				{!isServerWorking ? (
					<Notification
						animation={animations.smoothOpacity}
						delay={2000}
						styleNotification={stylesNotification.error}
						title='Server error'
						description='Server is not working.'
					/>
				) : null}

				{refreshAuthorizationError ? (
					<Notification
						animation={animations.smoothOpacity}
						delay={2000}
						styleNotification={stylesNotification.warning}
						title='Authorization error'
						description={refreshAuthorizationError}
					/>
				) : null}

				<div className={cl.avatar}>
					<Avatar name='Your avatar :)' photoUrl={user.avatar} />
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
