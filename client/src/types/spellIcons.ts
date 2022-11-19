export enum spellIconsEnum {
	'darkArtistry' = 'darkArtistry',
	'magusAccord' = 'magusAccord',
	'FamiliarsOfGloriousInspiration' = 'FamiliarsOfGloriousInspiration',
}

export const allSpellIcons = [
	spellIconsEnum.FamiliarsOfGloriousInspiration,
	spellIconsEnum.darkArtistry,
	spellIconsEnum.magusAccord,
]

export interface ISpellIcon {
	id: spellIconsEnum
	name: string
	imgs: string[]
}
