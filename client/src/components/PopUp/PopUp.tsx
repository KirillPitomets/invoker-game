import React from 'react'
import { useNavigate } from 'react-router-dom'
// ==== CSS Transition Group ====
import { CSSTransition } from 'react-transition-group'
// ==== Hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Redux ====
import {
	hideHotkeySwitchPopup,
	hideSettingsPopup,
} from '../../store/action-creators/popup'
import { useDispatch } from 'react-redux'
// ==== Styles ====
import cl from './PopUp.module.scss'
import cn from 'classnames'
// ==== Components ====
import PopUpRouter from '../PopUpRoutes'
import Container from '../Container'

const PopUp = () => {
	const { isSettingsPopUpActive } = useTypedSelector(state => state.popUp)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const handlePopUp = () => {
		dispatch(hideSettingsPopup())
		dispatch(hideHotkeySwitchPopup())

		setTimeout(() => {
			navigate('/')
		}, 300) // For animation. CSSTransition
	}

	return (
		<CSSTransition
			in={isSettingsPopUpActive}
			timeout={300}
			unmountOnExit
			classNames='popup'
		>
			<div className={cl.popup} onClick={handlePopUp}>
				<Container className={cl.container}>
					<div
						className={cn(cl.wrapper, 'popup-wrapper')}
						onClick={e => e.stopPropagation()}
					>
						<div className={cl.background}>
							<PopUpRouter />
						</div>
					</div>
				</Container>
			</div>
		</CSSTransition>
	)
}

export default PopUp
