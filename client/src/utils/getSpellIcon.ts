// ==== Icons ====
import {
	forgeIcons,
	forgeIconsType,
	ghostWalkIcons,
	ghostWalkIconsType,
	sunStrikeIcons,
	sunStrikeIconsType,
	tornadoIcons,
	blastIcons,
	alacrityIcons
} from '../global/allSpellAndSpheresIcons';
// ==== Utils ====
import { findSpellOrSphereIcon } from './findSpellOrSpheresIcon'

export const getSpellIconForgeSpirit = (
	theIconSet: string | null,
	isFamiliarsOfGloriousInspiration: boolean
): string => {

	if (isFamiliarsOfGloriousInspiration) {
		return forgeIcons.familiarsOfGloriousInspiration
	}

	return findSpellOrSphereIcon<forgeIconsType>({
		icons: forgeIcons,
		defaultIcon: forgeIcons.defaultIcon,
		iconName: theIconSet
	})

}

export const getSpellIconGhostWalk = (theIconSet: string | null): string => {

	return findSpellOrSphereIcon<ghostWalkIconsType>({
		icons: ghostWalkIcons,
		defaultIcon: ghostWalkIcons.default,
		iconName: theIconSet,
	})

}

export const getSpellIconSunStrike = (theIconSet: string | null): string => {

	return findSpellOrSphereIcon<sunStrikeIconsType>({
		icons: sunStrikeIcons,
		defaultIcon: sunStrikeIcons.default,
		iconName: theIconSet
	})
}

export const getSpellIconTornado = (isDarkArtistry: boolean): string => {

	return isDarkArtistry
		? tornadoIcons.darkArtistry
		: tornadoIcons.default
}

export const getSpellIconBlast = (isDarkArtistry: boolean): string => {
	return isDarkArtistry
		? blastIcons.darkArtistry
		: blastIcons.default
}

export const getSpellIconAlacrity = (isMagusApex: boolean): string => {
	return isMagusApex
		? alacrityIcons.magusApex
		: alacrityIcons.default
}


