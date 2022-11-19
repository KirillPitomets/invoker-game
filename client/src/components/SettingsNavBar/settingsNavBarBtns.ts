import { RouteEnum, RouteEnumId } from './../../types/route'

interface INavbarArray {
	id: string
	title: string
	path: string
}

export const settingsBtns: INavbarArray[] = [
	{
		id: 'interface-settings',
		title: 'Interface',
		path: `/${RouteEnum.settings}/${RouteEnumId['settings-interface']}`,
	},
	{
		id: 'hotkeys-settings',
		title: 'Hotkeys',
		path: `/${RouteEnum.settings}/${RouteEnumId['settings-hotkeys']}`,
	},
	{
		id: 'additional-functions-settings',
		title: 'Additional Functions',
		path: `/${RouteEnum.settings}/${RouteEnumId['settings-additional-functions']}`,
	},
]
