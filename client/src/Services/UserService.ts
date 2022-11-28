import axios, { AxiosResponse } from 'axios'
import { API_URL } from './../http/index'
import $api from '../http'
// ==== Types ====
import { IAuthResponse } from '../models/response/AuthResponse'
import { ILogin, IRegistration } from './types/UserService'

export class UserService {
	static async login({
		username,
		password,
	}: ILogin): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/login', { username, password })
	}

	static async registration({
		username,
		password,
		passwordConfirmation,
	}: IRegistration): Promise<AxiosResponse<IAuthResponse>> {
		return $api.post<IAuthResponse>('/registration', {
			username,
			password,
			passwordConfirmation,
		})
	}

	static async checkAuth() {
		return axios.get(`${API_URL}/refresh`, { withCredentials: true })
	}

	static async logout() {
		return axios.get(`${API_URL}/logout`, { withCredentials: true })
	}
}
