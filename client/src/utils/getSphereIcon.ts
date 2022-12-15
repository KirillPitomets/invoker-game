// ==== Types ====
import { sphereNameEnum } from "../types/spheres"
import { iconSetsEnum } from "../types/themes/theSets"
// ==== Spell icons ====
import { exortIcons, quasIcons, wexIcons } from "../global/allSpellAndSpheresIcons"

export const getSphereIcon = (id: sphereNameEnum, theSet: iconSetsEnum): string => {

	switch (id) {
		case sphereNameEnum.wex:
			return wexIcons[theSet]
		case sphereNameEnum.quas:
			return quasIcons[theSet]
		case sphereNameEnum.exort:
			return exortIcons[theSet]
		default: return ''
	}
}