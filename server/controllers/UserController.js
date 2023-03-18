const { validationResult } = require('express-validator')
const ApiError = require('../exceptions/apiError.js')
const FileService = require('../services/FileService.js')
// ==== Services ====
const UserService = require('../services/UserService.js')

class AuthController {
	async registration(req, res, next) {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Validator error', errors.array()))
			}

			const { username, password } = req.body

			const userData = await UserService.registration(
				username,
				password,
				req.files
			)

			res.cookie('refreshToken', userData.refreshToken, {
				// saving refresh in cookie
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30d will live. Tine in ms,
				httpOnly: true, // prevent cookie from being taken from the browser
			})

			return res.status(200).json(userData)
		} catch (err) {
			console.log(err)

			next(err)
		}
	}

	async login(req, res, next) {
		try {
			const errors = validationResult(req)

			if (!errors.isEmpty()) {
				return next(ApiError.BadRequest('Validator error', error.array()))
			}

			const { username, password } = req.body

			const userData = await UserService.login(username, password)

			res.cookie('refreshToken', userData.refreshToken, {
				// saving refresh in cookie
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30d will live. Tine in ms
				httpOnly: true, // prevent cookie from being taken from the browser
			})

			return res.status(200).json(userData)
		} catch (err) {
			console.log(err)

			next(err)
		}
	}

	async logout(req, res, next) {
		try {
			const { refreshToken } = req.cookies

			await UserService.logout(refreshToken)

			res.clearCookie('refreshToken')

			return res.status(200).json({ message: 'User successfully logged out' })
		} catch (err) {
			console.log(err)

			next(err)
		}
	}

	async refresh(req, res, next) {
		try {
			const { refreshToken } = req.cookies

			const userData = await UserService.refresh(refreshToken)

			res.cookie('refreshToken', userData.refreshToken, {
				// saving refresh in cookie
				maxAge: 30 * 24 * 60 * 60 * 1000, // 30d will live. Tine in ms
				httpOnly: true, // prevent cookie from being taken from the browser
			})
			return res.status(200).json(userData)
		} catch (err) {
			console.log(err)
			next(err)
		}
	}

	async changeUsername(req, res, next) {
		try {
			const { username } = req.body

			const userData = await UserService.changeUsername({
				userId: req.user.id,
				username,
			})

			return res.json({ user: userData })
		} catch (err) {
			console.log(err)
			next(err)
		}
	}

	async changePassword(req, res, next) {
		try {
			const { password } = req.body

			const userData = await UserService.changePassword({
				userId: req.user.id,
				password,
			})

			return res.json({user: userData})
		} catch (err) {
			console.log(err)
			next(err)
		}
	}

	async changeAvatar(req, res, next) {
		try {
			const file = req.files.avatar

			if (file.size > 2 * 1024 * 1024) /* 2mb */ {
				return next(ApiError.BadRequest('Your picture is so big :) Picture size should not exceed 2mb', []))
			}

			const userData = await UserService.changeAvatar({ userId: req.user.id, avatar: file })

			return res.json({ user: userData })
		} catch (err) {
			console.log(err)
			next(err)
		}
	}
}

module.exports = new AuthController()
