import React, { useEffect } from 'react'
// ==== Redux ====
import { hideHotkeySwitchPopup } from '../../store/action-creators/popup'
import { changeHotKey } from '../../store/action-creators/hotkeys'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './HotKeyPopUp.module.scss'
import cn from 'classnames'

const HotKeyPopUp = () => {
	const { displaySpellName } = useTypedSelector(state => state.hotkeys)
	const dispatch = useDispatch()

	const handleKeyboard = (e: KeyboardEvent) => {
		const { ctrlKey, altKey, shiftKey, repeat, code } = e
		const isKeyDownWithoutOtherKeys =
			ctrlKey || altKey || shiftKey ? false : true

		if (repeat || !isKeyDownWithoutOtherKeys) return false
		if (code === 'Escape') {
			dispatch(hideHotkeySwitchPopup())
			return false
		}

		dispatch(changeHotKey({ newHotKey: code }))
		dispatch(hideHotkeySwitchPopup())
	}

	const disableHotKeySwitchPopUp = () => {
		dispatch(hideHotkeySwitchPopup())
	}

	useEffect(() => {
		window.addEventListener('keyup', handleKeyboard)
		return () => window.removeEventListener('keyup', handleKeyboard)
	}, [])

	return (
		<div
			className={cl.popup}
			onClick={e => {
				e.stopPropagation()
				disableHotKeySwitchPopUp()
			}}
		>
			<div className={cl.wrapper}>
				<h3 className={cn(cl.title, cl.title_marg)}>
					BIND{' '}
					<span className={cn(cl.sphere, cl.sphere_q)}>
						" {displaySpellName} "
					</span>
				</h3>
				<p className={cl.text}>
					press any key or <span className={cn(cl.esc, cl.esc_marg)}>ESC</span>{' '}
					to cancels
				</p>
			</div>
		</div>
	)
}

export default HotKeyPopUp
