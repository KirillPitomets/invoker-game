// ==== Types ====
import { sphereNameEnum } from '../../types/spheres'
import { idSpellEnum } from './../../types/spells'
import {
	actionType,
	IState,
	spellActionTypes,
} from '../../types/reducers/spellReducer'
// ==== Global ====
import { emptySpell, allSpellsData } from '../../global/allSpells'
import { allSpheres } from '../../global/allSpheres'
// ==== Utils ====
import compareCombo from '../../utils/compareCombo'
import defineFollowingSpell from '../../utils/defineFollowingSpell'

const initialState: IState = {
	activeSpells: [idSpellEnum.empty, idSpellEnum.empty],
	combo: [
		allSpheres[allSpheres.length - 1].id, // last sphere this is empty sphere
		allSpheres[allSpheres.length - 1].id, // last sphere this is empty sphere
		allSpheres[allSpheres.length - 1].id, // last sphere this is empty sphere
	],
	followingSpell: emptySpell.id,
	prevActivatedSpell: emptySpell.id,
}

export const spellReducer = (
	state = initialState,
	action: actionType
): IState => {
	switch (action.type) {
		case spellActionTypes.CHANGE_ACTIVE_SPELLS:
			return (() => {
				const { combo, activeSpells } = state

				const isNotEmptyCombo = combo.find(
					sphere => sphere === sphereNameEnum.empty
				)

				if (isNotEmptyCombo) return state

				let currentSpell: idSpellEnum

				allSpellsData.find(spell => {
					const sortedSpellCombo = [...spell.combo].sort((a, b) =>
						a.localeCompare(b)
					)
					const sortedUserCombo = [...combo].sort((a, b) => a.localeCompare(b))
					const isSpell = compareCombo({
						spellCombo: sortedSpellCombo,
						userCombo: sortedUserCombo,
					})

					if (isSpell) {
						currentSpell = spell.id
					}
				})

				const isSpellOnSecondIndx =
					activeSpells[1] === currentSpell! ? true : false

				const hasSpellInActiveSpells: boolean = Boolean(
					activeSpells.find(activeSpellId => activeSpellId === currentSpell)
				)

				if (!hasSpellInActiveSpells) {
					const addedSpellInActiveSpells: idSpellEnum[] = [...activeSpells]
					addedSpellInActiveSpells.unshift(currentSpell!)
					addedSpellInActiveSpells.pop()
					return { ...state, activeSpells: addedSpellInActiveSpells }
				}

				if (hasSpellInActiveSpells && isSpellOnSecondIndx) {
					return { ...state, activeSpells: activeSpells.reverse() }
				}

				return state
			})()

		case spellActionTypes.CHANGE_COMBO:
			return (() => {
				const { sphere } = action.payload

				const currentCombo = state.combo

				const foundSphere = allSpheres.find(({ id }) => id === sphere)

				const isWholeArrayOfIdenticalSpheres = (): boolean => {
					return currentCombo.filter(item => item === foundSphere?.id)
						.length === 3
						? true
						: false
				}

				if (!isWholeArrayOfIdenticalSpheres()) {
					if (state.combo.length === 3) {
						currentCombo.shift()
					}

					if (foundSphere) {
						currentCombo.push(foundSphere.id)
					}

					return { ...state, combo: currentCombo }
				}
				return state
			})()

		case spellActionTypes.CHANGE_FOLLOWING_SPELL:
			return (() => {
				const { followingSpell, activeSpells, prevActivatedSpell } = state
				const currentActivatedSpellIndx = action.payload.spellIndx

				if (followingSpell === activeSpells[currentActivatedSpellIndx]) {
					let newFollowingSpell = defineFollowingSpell()

					while (newFollowingSpell === followingSpell) {
						newFollowingSpell = defineFollowingSpell()
					}

					return { ...state, followingSpell: newFollowingSpell }

				}

				return state
			})()

		case spellActionTypes.SET_FOLLOWING_SPELL:
			return (() => {
				let followingSpell = defineFollowingSpell()

				while (followingSpell === state.prevActivatedSpell) {
					followingSpell = defineFollowingSpell()
				}

				return { ...state, followingSpell, prevActivatedSpell: followingSpell }
			})()

		case spellActionTypes.RESET_ALL_SPELLS:
			return {
				...state,
				activeSpells: [emptySpell.id, emptySpell.id],
				combo: [
					allSpheres[allSpheres.length - 1].id, // last sphere this is empty sphere
					allSpheres[allSpheres.length - 1].id, // last sphere this is empty sphere
					allSpheres[allSpheres.length - 1].id, // last sphere this is empty sphere
				],
			}

		default:
			return state
	}
}
