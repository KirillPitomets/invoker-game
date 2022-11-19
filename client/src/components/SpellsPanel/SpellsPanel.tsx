import React from 'react'
// ==== Types ====
import { borderRadiusSideEnum } from '../UI/Spell/types'
// ==== Hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Assets ====
import ultimate from '../../assets/invokerIcons/spells/ultimate.jpg'
// ==== Styles ====
import cl from './SpellsPanel.module.scss'
// ==== Components ====
import ActiveSpells from '../ActiveSpells'
import SpellWithHotKey from '../UI/SpellWithHotKey'
import Spheres from '../Spheres'


const SpellsPanel = () => {
	
	const {hotkeys} = useTypedSelector(state => state.hotkeys)

	return (
		<div className={cl.wrap}>
			<Spheres />
			{/* ========== */}
			<ActiveSpells />
			{/* ========== */}
			<SpellWithHotKey
				name='Ultimate'
				hotkey={hotkeys.ultimate}
				photoUrl={ultimate}
				borderRadiusSide={borderRadiusSideEnum.right}
				alt='ultimate'
			/>
		</div>
	)
}

export default SpellsPanel
