import React, { FC } from 'react'
// ==== Styles ====
import cn from 'classnames'
import cl from './Notification.module.scss'

export enum stylesNotification {
	error,
	success,
	warning,
}

interface INotification {
	styleNotification: stylesNotification
	title?: string
	description?: string
}

const Notification: FC<INotification> = ({
	title,
	description,
	styleNotification,
}) => {
	return (
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
	)
}

export default Notification
