import React from 'react'
// ==== img ====
import face from '../../assets/imgs/face.jpg'
// ==== Icons ====
import {
	quasIcons,
	wexIcons,
	exortIcons,
} from '../../global/allSpellAndSpheresIcons'
// ==== Styles ====
import cl from './Loading.module.scss'
import cn from 'classnames'

const Loading = () => {
	return (
		<div className={cl.inner}>
			<p className={cl.text}>
				<span className={cl.text__span}>Loading</span>
			</p>
			<div className={cl.wrap}>
				<img
					className={cn(cl.icon, cl.icon_quas)}
					src={quasIcons.default}
					alt='quas'
				/>
				<img
					className={cn(cl.icon, cl.icon_wex)}
					src={wexIcons.default}
					alt='wex'
				/>
				<img
					className={cn(cl.icon, cl.icon_exort)}
					src={exortIcons.default}
					alt='exort'
				/>
				<img className={cn(cl.icon, cl.icon_face)} src={face} alt='Invoker' />
			</div>
		</div>
	)
}

export default Loading
