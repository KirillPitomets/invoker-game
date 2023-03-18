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
	alacrityIconsType,
	alacrityIcons,
	meteorIcons,
	meteorIconsType,
	coldSnapIcons,
	coldSnapIconsType,
	empIcons,
	empIconsType,
	iceWallIcons,
	iceWallIconsType,
	blastIconsType,
	tornadoIconsType,
} from '../global/allSpellAndSpheresIcons'
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
		iconName: theIconSet,
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
		iconName: theIconSet,
	})
}

export const getSpellIconTornado = (
	theIconSet: string | null,
	isDarkArtistry: boolean
): string => {
	if (isDarkArtistry) {
		return tornadoIcons.darkArtistry
	}

	return findSpellOrSphereIcon<tornadoIconsType>({
		icons: tornadoIcons,
		defaultIcon: tornadoIcons.default,
		iconName: theIconSet,
	})
}

export const getSpellIconBlast = (
	theIconSet: string | null,
	isDarkArtistry: boolean
): string => {
	if (isDarkArtistry) {
		return blastIcons.darkArtistry
	}

	return findSpellOrSphereIcon<blastIconsType>({
		icons: blastIcons,
		defaultIcon: blastIcons.default,
		iconName: theIconSet,
	})
}

export const getSpellIconAlacrity = (
	theIconSet: string | null,
	isMagusApex: boolean
): string => {
	if (isMagusApex) {
		return alacrityIcons.magusApex
	}

	return findSpellOrSphereIcon<alacrityIconsType>({
		icons: alacrityIcons,
		defaultIcon: alacrityIcons.default,
		iconName: theIconSet,
	})
}

export const getSpellIconMeteor = (theIconSet: string | null): string => {
	return findSpellOrSphereIcon<meteorIconsType>({
		icons: meteorIcons,
		defaultIcon: meteorIcons.default,
		iconName: theIconSet,
	})
}

export const getSpellIconColdSnap = (theIconSet: string | null): string => {
	return findSpellOrSphereIcon<coldSnapIconsType>({
		icons: coldSnapIcons,
		defaultIcon: meteorIcons.default,
		iconName: theIconSet,
	})
}

export const getSpellIconIceWall = (theIconSet: string | null): string => {
	return findSpellOrSphereIcon<iceWallIconsType>({
		icons: iceWallIcons,
		defaultIcon: meteorIcons.default,
		iconName: theIconSet,
	})
}

export const getSpellIconEmp = (theIconSet: string | null): string => {
	return findSpellOrSphereIcon<empIconsType>({
		icons: empIcons,
		defaultIcon: meteorIcons.default,
		iconName: theIconSet,
	})
}
