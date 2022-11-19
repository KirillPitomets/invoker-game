import React, { useEffect, useState } from 'react'
// ==== hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
// ==== Utils ====
import handleSpells from '../../utils/HandleSpells'
// ==== Redux ====
import {
	addSpellToCount,
	setStartedStatus,
} from '../../store/action-creators/challenge'
// ==== Styles ====
import cl from './App.module.scss'
// ==== Components ====
import Container from '../Container'
import Avatar from '../Avatar'
import UserNickName from '../UserNickName/UserNickName'
import Header from '../Header'
import PopUp from '../PopUp'
import GameScene from '../GameScene'

const App = () => {
	const { user } = useTypedSelector(state => state.auth)
	const { customBgUrl, isHideSpellList } = useTypedSelector(
		state => state.theme
	)

	return (
		<div className={cl.app}>
			<PopUp />

			<Header />

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
