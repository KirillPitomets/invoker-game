import { spellIconsEnum } from '../types/themes/spellIcons'
import { idSpellEnum } from '../types/spells'
import {
	getSpellIconBlast,
	getSpellIconForgeSpirit,
	getSpellIconTornado,
} from './getSpellIcon'

export const defineSpellIcon = (
	spellId: idSpellEnum,
	initialSpellIcon: string,
	possibleSpellIcons: spellIconsEnum[]
): string => {
	switch (spellId) {
		case idSpellEnum.tornado:
			return getSpellIconTornado(
				'',
				possibleSpellIcons?.includes(spellIconsEnum.darkArtistry)
			)
		case idSpellEnum.deafeningBlast:
			return getSpellIconBlast(
				'',
				possibleSpellIcons?.includes(spellIconsEnum.darkArtistry)
			)
		case idSpellEnum.forgeSpirit:
			return getSpellIconForgeSpirit(
				'',
				possibleSpellIcons?.includes(
					spellIconsEnum.FamiliarsOfGloriousInspiration
				)
			)
		default:
			return initialSpellIcon
	}
}
