import { idSpellEnum, ISpell } from '../spells'
import { sphereNameEnum } from '../spheres'

export enum spellActionTypes {
	'CHANGE_ACTIVE_SPELLS' = 'CHANGE_ACTIVE_SPELLS',
	'CHANGE_COMBO' = 'CHANGE_COMBO',
	'CHANGE_FOLLOWING_SPELL' = 'CHANGE_FOLLOWING_SPELL',
	'SET_FOLLOWING_SPELL' = 'SET_FOLLOWING_SPELL',
	'RESET_ALL_SPELLS' = 'RESET_ALL_SPELLS'
}

export interface IState {
	activeSpells: idSpellEnum[] 
	combo: sphereNameEnum[],
	followingSpell: idSpellEnum
	prevActivatedSpell: idSpellEnum
}

export type payloadChangeCombo = {
	sphere: sphereNameEnum
}

interface IActionChangeActiveSpell {
	type: spellActionTypes.CHANGE_ACTIVE_SPELLS,
}

interface IActionChangeCombo {
	type: spellActionTypes.CHANGE_COMBO,
	payload: payloadChangeCombo
}

export type payloadChangeFollowingSpell = {
	spellIndx: 0 | 1 
}

interface IActionChangeFollowingSpell {
	type: spellActionTypes.CHANGE_FOLLOWING_SPELL,
	payload: payloadChangeFollowingSpell
}

interface IActionSetFollowingSpell {
	type: spellActionTypes.SET_FOLLOWING_SPELL
}

interface IActionResetAllSpells {
	type: spellActionTypes.RESET_ALL_SPELLS
}

export type actionType = IActionChangeActiveSpell | IActionChangeCombo | IActionChangeFollowingSpell | IActionSetFollowingSpell | IActionResetAllSpells