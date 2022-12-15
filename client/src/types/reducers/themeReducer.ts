import { ISpell } from '../spells';
import { iconSetsEnum } from '../themes/theSets'
import { spellIconsEnum } from '../themes/spellIcons'
import { ISphere } from '../spheres'

export enum ActionTypes {
	'CHANGE_BG' = 'CHANGE_BG',
	'SET_DEFAULT_BG' = 'SET_DEFAULT_BG',
	'TOGGLE_VISIBLE_SPELL_LIST' = 'TOGGLE_VISIBLE_SPELL_LIST',
	'CHANGE_ICONS_SET' = 'CHANGE_ICONS_SET',
	'CHANGE_ADDITIONAL_ICONS' = 'CHANGE_ADDITIONAL_ICONS',
	'CHANGE_ICONS_SPELLS' = 'CHANGE_ICONS_SPELLS'
}

export interface State {
	customBgUrl: string
	isHideSpellList: boolean
	iconSet: keyof typeof iconSetsEnum | string
	activeSpellIcons: spellIconsEnum[] | null
	
	allSpheres: ISphere[]
	allSpells: ISpell[]
}

export type changeBgPayload = {
	url: string
}

interface changeBgActionType {
	type: ActionTypes.CHANGE_BG
	payload: changeBgPayload
}

interface setDefaultBgActionType {
	type: ActionTypes.SET_DEFAULT_BG
}

export type toggleVisibleSpellListPayload = {
	isHide: boolean
}

interface toggleVisibleSpellListActionType {
	type: ActionTypes.TOGGLE_VISIBLE_SPELL_LIST
	payload: toggleVisibleSpellListPayload
}

export type changeIconsSetPayload = {
	theSet: iconSetsEnum 
}

interface changeIconsSetActionType {
	type: ActionTypes.CHANGE_ICONS_SET
	payload: changeIconsSetPayload
}

export type changeIconsSpellsPayload = {
	nameOfTheSetSpellIcon: spellIconsEnum
}

interface changeIconsSpells {
	type: ActionTypes.CHANGE_ICONS_SPELLS,
	payload: changeIconsSpellsPayload
}

export type actionType =
	| changeBgActionType
	| setDefaultBgActionType
	| toggleVisibleSpellListActionType
	| changeIconsSetActionType
	| changeIconsSpells
