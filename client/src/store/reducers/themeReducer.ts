// ==== Initial data ====
import { allSpheres } from './../../global/allSpheres'
import { allSpellsData } from '../../global/allSpells'
// ==== Types ====
import { actionType, ActionTypes, State } from '../../types/reducers/themeReducer'
import { iconSetsEnum } from '../../types/themes/theSets'
import { spellIconsEnum } from '../../types/themes/spellIcons'
import { sphereNameEnum } from '../../types/spheres'
// ==== Utils ====
import { getSpellIconsNameFromLocalStorage } from '../../utils/getSpellIconsNameFromLocalStorage'
import { defineSpellIcon } from '../../utils/defineSpellIcon'
import { defineSpellIconsBySet } from '../../utils/defineSpellIconBySet'
import { getSphereIcon } from '../../utils/getSphereIcon'


const setSpellIconsToLocalStorage = (
	iconName: spellIconsEnum,
	isActive: boolean
) => {
	localStorage.setItem(`spellIcon-${iconName}`, isActive ? '1' : '0')
}


const initialState: State = {
	customBgUrl: window.localStorage.getItem('user-bg') || '',
	isHideSpellList: !!window.localStorage.getItem('is-hide-spell-list') || false,
	iconSet: localStorage.getItem('icon-set') || iconSetsEnum.default,

	activeSpellIcons: getSpellIconsNameFromLocalStorage(),

	allSpheres: allSpheres,
	allSpells: allSpellsData,
}

export const themeReducer = (
	state = initialState,
	action: actionType
): State => {
	switch (action.type) {
		case ActionTypes.TOGGLE_VISIBLE_SPELL_LIST:
			return (() => {
				const { isHide } = action.payload

				window.localStorage.setItem('is-hide-spell-list', `${isHide ? 1 : 0}`)

				return { ...state, isHideSpellList: isHide }
			})()

		case ActionTypes.CHANGE_BG:
			window.localStorage.setItem('user-bg', action.payload.url.trim())
			return { ...state, customBgUrl: action.payload.url.trim() }

		case ActionTypes.SET_DEFAULT_BG:
			window.localStorage.setItem('user-bg', '')
			return { ...state, customBgUrl: '' }

		case ActionTypes.CHANGE_ICONS_SET:
			return (() => {
				const { allSpheres } = state
				const { theSet } = action.payload

				const spheresNew = allSpheres.map(sphere => ({
					...sphere,
					photoUrl:
						sphere.id !== sphereNameEnum.empty
							? getSphereIcon(sphere.id, theSet)
							: sphere.photoUrl,
				}))

				const spellsNew = allSpellsData.map(spell => ({
					...spell,
					img: defineSpellIconsBySet({ initialImg: spell.img, spellId: spell.id, theSet }),
				}))


				window.localStorage.setItem('icon-set', action.payload.theSet)
				return {
					...state,
					iconSet: action.payload.theSet,
					allSpheres: spheresNew,
					allSpells: spellsNew,
				}
			})()

		case ActionTypes.CHANGE_ICONS_SPELLS:
			return (() => {
				const { nameOfTheSetSpellIcon } = action.payload
				const { activeSpellIcons, allSpells } = state

				let followingSpellIcons: spellIconsEnum[]

				if (activeSpellIcons?.includes(nameOfTheSetSpellIcon)) {
					const spellIconIndx = activeSpellIcons.findIndex(
						icon => icon === nameOfTheSetSpellIcon
					)

					followingSpellIcons = [
						...activeSpellIcons.slice(0, spellIconIndx),
						...activeSpellIcons.slice(spellIconIndx + 1),
					]

					setSpellIconsToLocalStorage(activeSpellIcons[spellIconIndx], false)
				} else {
					followingSpellIcons = [...activeSpellIcons!, nameOfTheSetSpellIcon]
					setSpellIconsToLocalStorage(nameOfTheSetSpellIcon, true)
				}

				// ========================================

				const allSpellsNew = allSpells.map(spell => {
					return {
						...spell,
						img: defineSpellIcon(spell.id, spell.img, followingSpellIcons),
					}
				})

				return {
					...state,
					activeSpellIcons: followingSpellIcons,
					allSpells: allSpellsNew,
				}
			})()
		default:
			return state
	}
}

export default themeReducer
