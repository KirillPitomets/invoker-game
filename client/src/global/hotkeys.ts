import { IHotKeys } from '../types/hotkeys'

export const hotkeys: IHotKeys = {
	quas: 'KeyQ',
	wex: 'KeyW',
	exort: 'KeyE',
	theFirstActiveSpell: 'KeyD',
	theSecondActiveSpell: 'KeyF',
	ultimate: 'KeyR',
}

export type hotkeysTypeKeys = keyof typeof hotkeys