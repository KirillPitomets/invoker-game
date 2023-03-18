import { idSpellEnum } from '../types/spells'
import { iconSetsEnum } from '../types/themes/theSets'
import {
	getSpellIconForgeSpirit,
	getSpellIconGhostWalk,
	getSpellIconSunStrike,
	getSpellIconAlacrity,
	getSpellIconBlast,
	getSpellIconColdSnap,
	getSpellIconEmp,
	getSpellIconIceWall,
	getSpellIconMeteor,
	getSpellIconTornado,
} from './getSpellIcon'

export type defineSpellIconBySetType = {
	spellId: idSpellEnum
	initialImg: string
	theSet: iconSetsEnum
}

export const defineSpellIconsBySet = ({
	initialImg,
	spellId,
	theSet,
}: defineSpellIconBySetType): string => {
	switch (spellId) {
		case idSpellEnum.ghostWalk:
			return getSpellIconGhostWalk(theSet)
		case idSpellEnum.forgeSpirit:
			return getSpellIconForgeSpirit(theSet, false)
		case idSpellEnum.sunStrike:
			return getSpellIconSunStrike(theSet)
		case idSpellEnum.chaosMeteor:
			return getSpellIconMeteor(theSet)
		case idSpellEnum.alacrity:
			return getSpellIconAlacrity(theSet, false)
		case idSpellEnum.coldSnap:
			return getSpellIconColdSnap(theSet)
		case idSpellEnum.deafeningBlast:
			return getSpellIconBlast(theSet, false)
		case idSpellEnum.emp:
			return getSpellIconEmp(theSet)
		case idSpellEnum.iceWall:
			return getSpellIconIceWall(theSet)
		case idSpellEnum.tornado:
			return getSpellIconTornado(theSet, false)
		default:
			return initialImg
	}
}
