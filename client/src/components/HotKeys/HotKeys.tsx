import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
// ==== Types ====
import { idSpellEnum } from '../../types/spells'
import { sphereNameEnum } from '../../types/spheres'
// ==== Binds ====
import { bindsActiveSpells, bindsSpheres } from './binds'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { resetAllBinds } from '../../store/action-creators/hotkeys'
import { useDispatch } from 'react-redux'
// ==== Utils ====
import { defineKey } from '../../utils/defineKey'
// ==== Imgs ====
import ultimate from '../../assets/invokerIcons/spells/ultimate.jpg'
// ==== Styles ====
import cl from './HotKeys.module.scss'
import cn from 'classnames'
// ==== Components ====
import SpellWithHotKey from '../UI/SpellWithHotKey'
import Button from '../UI/Button'
import Notification, { animations, stylesNotification } from '../Notification'
import HotKeyPopUp from '../HotKeyPopUp'

const Hotkeys = () => {
	const dispatch = useDispatch()
	const { hotkeys } = useTypedSelector(state => state.hotkeys)
	const { allSpells, allSpheres } = useTypedSelector(state => state.theme)
	const { isHotkeySwitchPopUpActive } = useTypedSelector(state => state.popUp)

	const [isCompletedSuccessfully, setIsCompletedSuccessfully] = useState(false)

	const handleAllBinds = () => {
		dispatch(resetAllBinds())
	}

	const getSpellPhoto = (spellId: idSpellEnum): string => {
		return allSpells.find(spell => spell.id === spellId)?.img!
	}

	const getSpherePhoto = (sphereId: sphereNameEnum): string => {
		return allSpheres.find(sphere => sphere.id === sphereId)?.photoUrl!
	}

	return (
		<>
			<CSSTransition
				in={isHotkeySwitchPopUpActive}
				timeout={300}
				unmountOnExit
				classNames='smooth-opacity'
			>
				<HotKeyPopUp />
			</CSSTransition>

			<div className={cn(cl.wrapper, cl.wrapper_marg)}>
				{bindsSpheres.map(bind => (
					<SpellWithHotKey
						key={`HotKeys - ${hotkeys[bind.indexInBindsObj]}`}
						name={bind.name}
						photoUrl={getSpherePhoto(bind.id)}
						hotkey={defineKey(hotkeys[bind.indexInBindsObj])}
						canChangeHotkey={true}
						indexInHotkeysObj={bind.indexInBindsObj}
					/>
				))}
			</div>

			<div className={cn(cl.wrapper, cl.wrapper_marg)}>
				{bindsActiveSpells.map(bind => (
					<SpellWithHotKey
						key={`HotKeys - ${hotkeys[bind.indexInBindsObj]}`}
						name={bind.name}
						photoUrl={getSpellPhoto(bind.id)}
						hotkey={defineKey(hotkeys[bind.indexInBindsObj])}
						canChangeHotkey={true}
						indexInHotkeysObj={bind.indexInBindsObj}
					/>
				))}
			</div>

			<div className={cl.wrapper}>
				<SpellWithHotKey
					name='Ultimate'
					hotkey={defineKey(hotkeys.ultimate)}
					photoUrl={ultimate}
					canChangeHotkey={true}
					indexInHotkeysObj='ultimate'
				/>
			</div>

			<div className={cl.inner}>
				<Button
					onClick={() => {
						handleAllBinds()
						setIsCompletedSuccessfully(true)
					}}
				>
					Reset all binds
				</Button>

				{isCompletedSuccessfully ? (
					<Notification
						delay={2000}
						functionAfterAnimatin={() => setIsCompletedSuccessfully(false)}
						animation={animations.smoothOpacity}
						description='Hot keys reset successfully'
						styleNotification={stylesNotification.success}
					/>
				) : null}
			</div>
		</>
	)
}

export default Hotkeys
