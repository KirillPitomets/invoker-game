import { spellIconsEnum, allSpellIcons } from "../types/themes/spellIcons"


export const getSpellIconsNameFromLocalStorage = (): spellIconsEnum[] => {
	const activeSpellIcons: spellIconsEnum[] = []

	allSpellIcons.forEach(icon => {
		if (Number(localStorage.getItem(`spellIcon-${icon}`))) {
			activeSpellIcons.push(icon)
		}
	})

	return activeSpellIcons
}

