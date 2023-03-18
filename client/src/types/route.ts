export interface IRoutes {
	id: string
	path: RouteEnum | string
	Page: any
}

export const pagePath = 'invoker-game'

export enum RouteEnum {
	'information' = 'invoker-game/information',
	'high_score' = 'invoker-game/high_score',
	'user' = 'invoker-game/user',
	'auth' = 'invoker-game/auth',
	'auth_id' = 'invoker-game/auth/:id',
	'settings' = 'invoker-game/settings',
	'settings_id' = 'invoker-game/settings/:id',
}

export enum RouteEnumId {
	'registration' = 'registration',
	'login' = 'login',
	'settings-interface' = 'interface',
	'settings-hotkeys' = 'hotkeys',
	'settings-additional-functions' = 'additional-functions',
}
