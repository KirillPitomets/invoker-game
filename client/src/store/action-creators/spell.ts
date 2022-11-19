import {
	spellActionTypes,
	actionType,
	payloadChangeCombo,
	payloadChangeFollowingSpell,
} from '../../types/reducers/spellReducer'

export const changeActiveSpell = (): actionType => {
	return { type: spellActionTypes.CHANGE_ACTIVE_SPELLS }
}

export const changeCombo = ({ sphere }: payloadChangeCombo): actionType => {
	return { type: spellActionTypes.CHANGE_COMBO, payload: { sphere } }
}

export const changeFollowingSpell = ({ spellIndx }: payloadChangeFollowingSpell): actionType => {
	return { type: spellActionTypes.CHANGE_FOLLOWING_SPELL, payload: { spellIndx } }
}

export const setFollowingSpell = ():actionType => {
	return { type: spellActionTypes.SET_FOLLOWING_SPELL }
}

export const resetAllSpells = (): actionType => {
	return { type: spellActionTypes.RESET_ALL_SPELLS }
}

