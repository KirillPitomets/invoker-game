import { ISpellIcon, spellIconsEnum } from '../types/themes/spellIcons'
// ==== Imgs ====
import { alacrityIcons, blastIcons, forgeIcons, tornadoIcons } from './allSpellAndSpheresIcons'

export const allAdditionalIcons: ISpellIcon[] = [
	{
		id: spellIconsEnum.darkArtistry,
		name: 'Dark Artistry',
		imgs: [tornadoIcons.darkArtistry, blastIcons.darkArtistry],
	},
	{
		id: spellIconsEnum.magusAccord,
		name: 'Magus Accord',
		imgs: [alacrityIcons.magusApex],
	},
	{
		id: spellIconsEnum.FamiliarsOfGloriousInspiration,
		name: 'Familiars of Glorious Inspiration',
		imgs: [forgeIcons.familiarsOfGloriousInspiration],
	},
]
