import { hotkeysTypeKeys } from "../global/hotkeys";

export enum sphereNameEnum {
	quas = 'quas',
	wex = 'wex',
	exort = 'exort',
	empty = 'empty'
}

export interface ISphere {
	id: sphereNameEnum,
	name: string,
	photoUrl: string,
	bind: hotkeysTypeKeys | ''
}