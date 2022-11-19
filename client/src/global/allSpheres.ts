import { sphereNameEnum, ISphere } from '../types/spheres'
// ==== Utils ====
import { findSpellOrSphereIcon } from '../utils/findSpellOrSpheresIcon'
// ==== Icons ====
import { quasIcons, wexIcons, exortIcons } from './allSpellAndSpheresIcons'

const iconSet = localStorage.getItem('icon-set')

export const allSpheres: ISphere[] = [
	{
		id: sphereNameEnum.quas,
		name: 'Quas',
		photoUrl: findSpellOrSphereIcon({ icons: quasIcons, defaultIcon: quasIcons.default, iconName: iconSet }),
		bind: 'quas',
	},
	{
		id: sphereNameEnum.wex,
		name: 'Wex',
		photoUrl: findSpellOrSphereIcon({ icons: wexIcons, defaultIcon: wexIcons.default, iconName: iconSet }),
		bind: 'wex',
	},
	{
		id: sphereNameEnum.exort,
		name: 'Exort',
		photoUrl: findSpellOrSphereIcon({ icons: exortIcons, defaultIcon: exortIcons.default, iconName: iconSet }),
		bind: 'exort',
	},
	{
		id: sphereNameEnum.empty,
		name: '',
		photoUrl: '',
		bind: '',
	},
]