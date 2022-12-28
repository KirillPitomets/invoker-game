import { IUploadAvatar } from './../types/services/UserService'
import axios, { AxiosResponse } from 'axios'
import { API_URL } from './../http/index'
import $api from '../http'
// ==== Types ====
import { IAuthResponse } from '../models/response/AuthResponse'
import {
	IChangeUsername,
	IChangeUserPassword,
	ILogin,
	IRegistration,
} from '../types/services/UserService'
import { IUser } from '../models/IUser'
import { IFile } from '../models/IFile'

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

	static async changePassword({
		password,
	}: IChangeUserPassword): Promise<void> {
		return $api.put('/password', { password })
	}

	static async changeUsername({
		username,
	}: IChangeUsername): Promise<AxiosResponse<IUser>> {
		return $api.put('/username', { username })
	}

	static async checkAuth() {
		return axios.get(`${API_URL}/refresh`, { withCredentials: true })
	}

	static async logout() {
		return $api.post('/logout')
	}

	static async uploadAvatar({
		avatar,
	}: IUploadAvatar): Promise<AxiosResponse<IUser>> {
		
		const formData = new FormData()
		formData.append('avatar', avatar)
		
		return $api.put('/avatar', formData, {
			headers: { "Content-Type": "multipart/form-data" },
		})
	}
}
