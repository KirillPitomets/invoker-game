export interface IRoutes {
	id: string
	path: RouteEnum | string
	Page: any
}

export enum RouteEnum {
	'information' = 'information',
	'high-score' = 'high-score',
	'user' = 'user',
	'auth' = 'auth',
	'auth_id' = 'auth/:id',
	'settings' = 'settings',
	'settings_id' = 'settings/:id',
}

export enum RouteEnumId {
	'registration' = 'registration',
	'login' = 'login',
	'settings-interface' = 'interface',
	'settings-hotkeys' = 'hotkeys',
	'settings-additional-functions' = 'additional-functions',
}

