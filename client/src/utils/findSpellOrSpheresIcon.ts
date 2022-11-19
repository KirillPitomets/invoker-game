export type findSpellOrSphereIconType<T> = {
	iconName: string | null,
	icons: T,
	defaultIcon: string
}


export const findSpellOrSphereIcon = <T extends unknown>({ defaultIcon, iconName, icons }: findSpellOrSphereIconType<T>): string => {
	let key: keyof T
	let foundIcon: string = defaultIcon

	if (iconName) {
		for (key in icons) {
			if (key === iconName) {
				foundIcon = String(icons[key])
			}
		}
	}

	return foundIcon
}