import React, { Dispatch, FC, useState } from 'react'
// ==== Styles ====
import cn from 'classnames'
import cl from './Notification.module.scss'
import { CSSTransition } from 'react-transition-group'
import useTimeout from '../../hooks/useTimeout'

export enum stylesNotification {
	error,
	success,
	warning,
}

export enum animations {
	smoothOpacity,
	RightToLeft,
}

interface INotification {
	styleNotification: stylesNotification
	title?: string
	description?: string
	delay: number // ms
	animation: animations
	functionAfterAnimatin?: () => void
}

const Notification: FC<INotification> = ({
	title,
	description,
	styleNotification,
	delay,
	animation,
	functionAfterAnimatin,
}) => {
	const [isShow, setIsShow] = useState(true)

	useTimeout(() => {
		setIsShow(false)
	}, delay)

	useTimeout(() => {
		if (functionAfterAnimatin) {
			functionAfterAnimatin()
		}
	}, delay + 500)

	return (
		<CSSTransition
			in={isShow}
			timeout={300}
			unmountOnExit
			classNames={cn(
				animation === animations.RightToLeft && 'right-to-left',
				animation === animations.smoothOpacity && 'smooth-opacity'
			)}
		>
			<div
				className={cn(
					cl.wrapper,
					styleNotification === stylesNotification.success && cl.success,
					styleNotification === stylesNotification.warning && cl.warning,
					styleNotification === stylesNotification.error && cl.error
				)}
			>
				{title && <h3 className={cl.title}>{title}</h3>}
				{description && <p className={cl.des}>{description}</p>}
			</div>
		</CSSTransition>
	)
}

export default Notification
