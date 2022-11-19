import { sphereNameEnum } from './../types/spheres'
// ==== Redux ====
import {
	changeActiveSpell,
	changeCombo,
	changeFollowingSpell,
} from './../store/action-creators/spell'
import { store } from '../store'

let isStartedChallenge: boolean = false
let isActivePopUp: boolean = false

let hotkeys = store.getState().hotkeys.hotkeys;

store.subscribe(() => {
	const { challenge } = store.getState()
	const { popUp } = store.getState()
	hotkeys = store.getState().hotkeys.hotkeys;

	isStartedChallenge = challenge.isChallengeStarted
	isActivePopUp = popUp.isSettingsPopUpActive
})

export default function handleSpells(e: KeyboardEvent) {
	const { code, repeat } = e

	if (repeat || isActivePopUp) return false

	if (code === hotkeys.ultimate) {
		store.dispatch(changeActiveSpell())
	}
	if (code === hotkeys.wex) {
		store.dispatch(changeCombo({ sphere: sphereNameEnum.wex }))
	}
	if (code === hotkeys.quas) {
		store.dispatch(changeCombo({ sphere: sphereNameEnum.quas }))
	}
	if (code === hotkeys.exort) {
		store.dispatch(changeCombo({ sphere: sphereNameEnum.exort }))
	}
	if (code === hotkeys.theFirstActiveSpell) {
		if (isStartedChallenge) {
			store.dispatch(changeFollowingSpell({ spellIndx: 0 }))
		}
	}
	if (code === hotkeys.theSecondActiveSpell) {
		if (isStartedChallenge) {
			store.dispatch(changeFollowingSpell({ spellIndx: 1 }))
		}
	}
}
