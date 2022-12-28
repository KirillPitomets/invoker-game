export enum InputNames {
	username = 'username',
	password = 'password',
	passwordConfirmation = 'passwordConfirmation'
}


export interface IRegistration {
	[InputNames.username]: string
	[InputNames.password]: string
	[InputNames.passwordConfirmation]: string
}

export interface ILogin {
	[InputNames.username]: string
	[InputNames.password]: string
}

export interface IChangeUsername {
	[InputNames.username]: string
}

export interface IChangeUserPassword {
	[InputNames.password]: string
	[InputNames.passwordConfirmation]: string
}

export interface IUploadAvatar {
	avatar: File,
}


export interface IChangeAvatar {
	avatar: FileList
}