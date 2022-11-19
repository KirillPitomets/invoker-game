import React from 'react'
// ==== Hooks ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './Header.module.scss'
// ==== Components ====
import Container from '../Container'
import Logo from '../Logo'
import Navbar from '../Navbar'
import TimeBar from '../TimeBar'


const Header = () => {
	const { isChallengeStarted, challengeDurationInSeconds } =
		useTypedSelector(state => state.challenge)

	const dispatch = useDispatch()

	return (
		<header className={cl.header}>
			<Container>
				<div className={cl.header__wrapper}>
					<div className={cl.header__inner}>
						<Logo />

						<Navbar />
					</div>
				</div>

				<TimeBar
					delay={challengeDurationInSeconds}
					isActive={isChallengeStarted}
				/>
			</Container>
		</header>
	)
}

export default Header
