import $api from '../http'
// ==== Types ====
import { AxiosResponse } from 'axios'
import { IAuthResponse } from '../models/response/AuthResponse'
import { ILogin, IRegistration } from './types/UserService'

export class UserService {
	static async login({
		username,
		password,
	}: ILogin): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/login', { username, password })
	}

	static async registration({username, password, confirmationPassword}: IRegistration): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/registration', { username, password, confirmationPassword })
	}
}
