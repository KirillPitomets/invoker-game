// ==== Functions ====
import {
	getSpellIconAlacrity,
	getSpellIconBlast,
	getSpellIconForgeSpirit,
	getSpellIconGhostWalk,
	getSpellIconSunStrike,
	getSpellIconTornado,
} from '../utils/getSpellIcon'
// ==== Types ====
import { idSpellEnum, ISpell } from '../types/spells'
import { sphereNameEnum } from '../types/spheres'
// ==== Icons ====
import { coldSnapIcons, empIcons, iceWallIcons, meteorIcons } from './allSpellAndSpheresIcons'

const iconSet = localStorage.getItem('icon-set')

// I changed string type to number for successful type comparison
const spellIconDarkArtistry = Number(
	localStorage.getItem('spellIcon-darkArtistry')
)
const spellIconFamiliarsOfGloriousInspiration = Number(
	localStorage.getItem('spellIcon-FamiliarsOfGloriousInspiration')
)
const spellIconMagusAccord = Number(
	localStorage.getItem('spellIcon-magusAccord')
)

// ==== the get functions ====

export const allSpellsData: ISpell[] = [
	{
		id: idSpellEnum.chaosMeteor,
		name: 'Chaos Meteor',
		img: meteorIcons.default,
		combo: [sphereNameEnum.exort, sphereNameEnum.exort, sphereNameEnum.wex],
	},
	{
		id: idSpellEnum.sunStrike,
		img: getSpellIconSunStrike(iconSet),
		name: 'Sun Strike',
		combo: [sphereNameEnum.exort, sphereNameEnum.exort, sphereNameEnum.exort],
	},
	{
		id: idSpellEnum.forgeSpirit,
		img: getSpellIconForgeSpirit(iconSet, !!spellIconFamiliarsOfGloriousInspiration),
		name: 'forge Spirit',
		combo: [sphereNameEnum.exort, sphereNameEnum.exort, sphereNameEnum.quas],
	},
	{
		id: idSpellEnum.coldSnap,
		img: coldSnapIcons.default,
		name: 'Cold Snap',
		combo: [sphereNameEnum.quas, sphereNameEnum.quas, sphereNameEnum.quas],
	},
	{
		id: idSpellEnum.iceWall,
		img: iceWallIcons.default,
		name: 'Ice Wall',
		combo: [sphereNameEnum.quas, sphereNameEnum.quas, sphereNameEnum.exort],
	},
	{
		id: idSpellEnum.ghostWalk,
		img: getSpellIconGhostWalk(iconSet),
		name: 'Ghost Walk',
		combo: [sphereNameEnum.quas, sphereNameEnum.quas, sphereNameEnum.wex],
	},
	{
		id: idSpellEnum.emp,
		img: empIcons.default,
		name: 'EMP',
		combo: [sphereNameEnum.wex, sphereNameEnum.wex, sphereNameEnum.wex],
	},
	{
		id: idSpellEnum.alacrity,
		img: getSpellIconAlacrity(!!spellIconMagusAccord),
		name: 'Alacrity',
		combo: [sphereNameEnum.wex, sphereNameEnum.wex, sphereNameEnum.exort],
	},
	{
		id: idSpellEnum.tornado,
		img: getSpellIconTornado(!!spellIconDarkArtistry),
		name: 'Tornado',
		combo: [sphereNameEnum.wex, sphereNameEnum.wex, sphereNameEnum.quas],
	},
	{
		id: idSpellEnum.deafeningBlast,
		img: getSpellIconBlast(!!spellIconDarkArtistry),
		name: 'Deafening Blast',
		combo: [sphereNameEnum.quas, sphereNameEnum.wex, sphereNameEnum.exort],
	},
]

export const emptySpell: ISpell = {
	id: idSpellEnum.empty,
	img: '',
	name: 'Empty spell',
	combo: [],
}
