export const defineKey = (hotkey: string): string => {
	const isKeyCode = hotkey.slice(0, 3) === 'Key' ? true : false

	if (isKeyCode) {
		return hotkey.slice(3).split('')[0]
	}

	return hotkey
}