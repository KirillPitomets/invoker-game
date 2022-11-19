import React, { ReactNode } from 'react'
// ==== React router ====
import { useParams } from 'react-router-dom'
// ==== Icons ====
import settingsIcon from '../../assets/icons/settings.svg'
// ==== Types ====
import { RouteEnumId } from '../../types/route'
// ==== Styles ====
import cl from './Settings.module.scss'
import cn from 'classnames'
// ==== Components ====
import PageTitle from '../../components/PageTitle'
import SettingsNavBar from '../../components/SettingsNavBar'
import InterfaceSettings from '../../components/InterfaceSettings'
import HotKeys from '../../components/HotKeys'
import AdditionalFunctions from '../../components/AdditionalFunctions'

const defineSetting = (id: string): ReactNode => {
	switch (id) {
		case RouteEnumId['settings-interface']: return <InterfaceSettings/>
		case RouteEnumId['settings-hotkeys']: return <HotKeys/>
		case RouteEnumId['settings-additional-functions']: return <AdditionalFunctions/>
		default: return <></>		
	}
}

const Settings = () => {

	const {id} = useParams()

	return (
		<>
			<PageTitle iconUrl={settingsIcon} iconAlt='Settings'>
				Settings
			</PageTitle>

			<SettingsNavBar />

			<div className={cn(cl.wrapper, cl.wrapper_marg)}>

				{ defineSetting(id!) }

			</div>
		</>
	)
}

export default Settings
