import axios, { AxiosRequestConfig } from 'axios'
import { IAuthResponse } from '../models/response/AuthResponse'

export const API_URL = 'http://localhost:7000/api'

const $api = axios.create({
	withCredentials: true, // For send cookie
	baseURL: API_URL,
})

$api.interceptors.request.use(
	(config: AxiosRequestConfig): AxiosRequestConfig => {
		config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`

		return config
	}
)

$api.interceptors.response.use(
	config => {
		return config
	},
	async err => {
		const originalRequest = err.config

		if (err.response.status === 401 && err.config && !err.config._isRetry) {
			originalRequest._isRetry = true

			try {
				const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
					withCredentials: true,
				})

				localStorage.setItem('token', response.data.accessToken)

				return $api.request(originalRequest)
			} catch (err) {
				console.log('User not authorization')
			}
		}

		throw err
	}
)

export default $api
