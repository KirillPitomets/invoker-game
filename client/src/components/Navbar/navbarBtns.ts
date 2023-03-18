import { RouteEnum, RouteEnumId } from '../../types/route'
// ==== Icons ====
import infoIcon from '../../assets/icons/information.svg'
import userIcon from '../../assets/icons/user.svg'
import crownIcon from '../../assets/icons/crown.svg'
import settingsIcon from '../../assets/icons/settings.svg'

export interface INavbar {
	id: string
	icon: string
	path: RouteEnum | string
}

export const navbarUserIsAuth: INavbar[] = [
	{
		id: 'navbar-information',
		icon: infoIcon,
		path: RouteEnum.information,
	},
	{
		id: 'navbar-crown',
		icon: crownIcon,
		path: RouteEnum.high_score,
	},
	{
		id: 'navbar-settings',
		icon: settingsIcon,
		path: `${RouteEnum.settings}/${RouteEnumId['settings-interface']}`,
	},
	{
		id: 'navbar-user',
		icon: userIcon,
		path: RouteEnum.user,
	},
]

export const navbarUserIsNotAuth: INavbar[] = [
	{
		id: 'navbar-information',
		icon: infoIcon,
		path: RouteEnum.information,
	},
	{
		id: 'navbar-crown',
		icon: crownIcon,
		path: RouteEnum.high_score,
	},
	{
		id: 'navbar-settings',
		icon: settingsIcon,
		path: `${RouteEnum.settings}/${RouteEnumId['settings-interface']}`,
	},
	{
		id: 'navbar-user',
		icon: userIcon,
		path: `${RouteEnum.auth}/${RouteEnumId.login}`,
	},
]
