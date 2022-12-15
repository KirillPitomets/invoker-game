import { quasIcons, wexIcons, exortIcons, forgeIcons, ghostWalkIcons, sunStrikeIcons } from '../global/allSpellAndSpheresIcons'

import { iconSetsEnum } from '../types/themes/theSets'

export interface ISet {
	id: iconSetsEnum
	title: string
	imgs: string[]
}

export const theSets: ISet[] = [
	{
		id: iconSetsEnum.babyInvoker,
		title: 'Baby Invoker',
		imgs: [
			quasIcons.babyInvoker,
			wexIcons.babyInvoker,
			exortIcons.babyInvoker,
			forgeIcons.babyInvoker,
			ghostWalkIcons.babyInvoker,
		],
	},
	{
		id: iconSetsEnum.magusApex,
		title: 'Magus Apex',
		imgs: [quasIcons.magusApex, exortIcons.default, wexIcons.magusApex, sunStrikeIcons.magusApex],
	},
	{
		id: iconSetsEnum.default,
		title: 'Default icons sphere',
		imgs: [quasIcons.default, wexIcons.default, exortIcons.default]
	},
]
