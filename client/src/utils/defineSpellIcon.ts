import { spellIconsEnum } from "../types/spellIcons"
import { idSpellEnum } from "../types/spells"
import { getSpellIconAlacrity, getSpellIconBlast, getSpellIconForgeSpirit, getSpellIconTornado } from "./getSpellIcon"

export const defineSpellIcon = (
	spellId: idSpellEnum,
	initialSpellIcon: string,
	possibleSpellIcons: spellIconsEnum[]
): string => {
	switch (spellId) {
		case idSpellEnum.tornado:
			return getSpellIconTornado(
				possibleSpellIcons?.includes(spellIconsEnum.darkArtistry)
			)
		case idSpellEnum.deafeningBlast:
			return getSpellIconBlast(
				possibleSpellIcons?.includes(spellIconsEnum.darkArtistry)
			)
		case idSpellEnum.forgeSpirit:
			return getSpellIconForgeSpirit(
				'',
				possibleSpellIcons?.includes(
					spellIconsEnum.FamiliarsOfGloriousInspiration
				)
			)
		case idSpellEnum.alacrity:
			return getSpellIconAlacrity(
				possibleSpellIcons?.includes(spellIconsEnum.magusAccord)
			)

		default:
			return initialSpellIcon
	}
}