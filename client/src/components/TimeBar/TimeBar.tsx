import React, { FC } from 'react'
// ==== Styles ====
import cl from './TimeBar.module.scss'
import cn from 'classnames'

interface ITimeBar {
	isActive: boolean
	delay: number
}

const TimeBar: FC<ITimeBar> = ({ isActive, delay }) => {
	
	const barStyles = {
		transition: `transform ${delay}s linear`,
	}


	return (
		<div className={cl['time-bar']}>
			<div className={cl.wrapper}>
				<div
					style={isActive ? barStyles : undefined}
					className={cn(cl.bar, cl.bar_rgb, isActive && cl.bar_active)}
				></div>
			</div>
		</div>
	)
}

export default TimeBar
