import React, { FC, ReactNode } from 'react'
// ==== CSS Transition Group ====
import { CSSTransition } from 'react-transition-group'
// ==== Hooks ====
import useTimeout from '../../hooks/useTimeout'
// ==== Styles ====
import cl from './PopUp.module.scss'
import cn from 'classnames'
// ==== Components ====
import Container from '../Container'

interface IPopUP {
	children?: ReactNode
	delay: number
	isActive: boolean
	closePopUp: () => void
	hideAllInternalPopUps?: () => void
}

const PopUp: FC<IPopUP> = ({
	children,
	delay,
	hideAllInternalPopUps,
	isActive,
	closePopUp,
}) => {


	const hidePopUP = () => {
		if (hideAllInternalPopUps) {
			hideAllInternalPopUps()
		}

		closePopUp()
	}

	return (
		<CSSTransition in={isActive} timeout={300} unmountOnExit classNames='popup'>
			<div className={cl.popup} onClick={hidePopUP}>
				<Container className={cl.container}>
					<div
						className={cn(cl.wrapper, 'popup-wrapper')}
						onClick={e => e.stopPropagation()}
					>
						<div className={cl.background}>{children}</div>
					</div>
				</Container>
			</div>
		</CSSTransition>
	)
}

export default PopUp
