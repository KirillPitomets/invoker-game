import React from 'react'
import { NavLink } from 'react-router-dom'
import {settingsBtns} from './settingsNavBarBtns'
// ==== Styles ====
import cl from './SettingsNavBar.module.scss'
import cn from 'classnames'
// ==== Components ====

const SettingsNavBar = () => {
	return (
		<div className={cl.wrapper}>
			{settingsBtns.map(btn => (
				<NavLink key={btn.id} to={btn.path} className={({isActive}) => isActive ? cn(cl.link, cl.link_active) : cl.link}>
					{btn.title}
				</NavLink>
			))}
		</div>
	)
}

export default SettingsNavBar
