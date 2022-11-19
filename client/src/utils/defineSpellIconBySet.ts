import { idSpellEnum } from "../types/spells"
import { iconSetsEnum } from "../types/theSets"
import { getSpellIconForgeSpirit, getSpellIconGhostWalk, getSpellIconSunStrike } from "./getSpellIcon"

export type defineSpellIconBySetType = {
	spellId: idSpellEnum,
	initialImg: string,
	theSet: iconSetsEnum
}

export const defineSpellIconsBySet = ({ initialImg, spellId, theSet }: defineSpellIconBySetType): string => {
	switch (spellId) {
		case idSpellEnum.ghostWalk:
			return getSpellIconGhostWalk(theSet)
		case idSpellEnum.forgeSpirit:
			return getSpellIconForgeSpirit(theSet, false)
		case idSpellEnum.sunStrike:
			return getSpellIconSunStrike(theSet)
		default:
			return initialImg
	}
}