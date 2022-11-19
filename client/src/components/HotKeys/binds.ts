// ==== Types ====
import { hotkeysTypeKeys } from './../../global/hotkeys';
import { sphereNameEnum } from './../../types/spheres';
import { idSpellEnum } from '../../types/spells';

interface IBindSphere {
	id: sphereNameEnum
	name: string | sphereNameEnum
	indexInBindsObj: hotkeysTypeKeys
}

interface IBindSpell extends Omit<IBindSphere, 'id'> {
	id: idSpellEnum
}

export const bindsSpheres: IBindSphere[] = [
	{
		id: sphereNameEnum.quas,
		name: sphereNameEnum.quas,
		indexInBindsObj: 'quas',
	},
	{
		id: sphereNameEnum.wex,
		name: sphereNameEnum.wex,
		indexInBindsObj: 'wex',
	},
	{
		id: sphereNameEnum.exort,
		name: sphereNameEnum.exort,
		indexInBindsObj: 'exort',
	},
]

export const bindsActiveSpells: IBindSpell[] = [
	{
		id: idSpellEnum.chaosMeteor,
		name: 'The first spell',
		indexInBindsObj: 'theFirstActiveSpell',
	},
	{
		id: idSpellEnum.sunStrike,
		name: 'The second spell',
		indexInBindsObj: 'theSecondActiveSpell',
	},
]