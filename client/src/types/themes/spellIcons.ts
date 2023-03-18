export enum spellIconsEnum {
	'darkArtistry' = 'darkArtistry',
	'magusAccord' = 'magusAccord',
	'FamiliarsOfGloriousInspiration' = 'FamiliarsOfGloriousInspiration',
	
	'anime' = 'anime'
}

export const allSpellIcons = [
	spellIconsEnum.FamiliarsOfGloriousInspiration,
	spellIconsEnum.darkArtistry,
	spellIconsEnum.magusAccord,

	spellIconsEnum.anime
]

export interface ISpellIcon {
	id: spellIconsEnum
	name: string
	imgs: string[]
}
