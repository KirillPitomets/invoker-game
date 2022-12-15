const jwt = require('jsonwebtoken')
const TokenModel = require('../models/TokenModel')

class TokenService {
	validateAccessToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET)
			return userData
		} catch (err) {
			return null
		}
	}

	validateRefreshToken(token) {
		try {
			const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET)
			return userData
		} catch (err) {
			return null
		}
	}

	generateTokens(payload) {
		const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
			expiresIn: '1m',
		})
		const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
			expiresIn: '30d',
		})

		return {
			accessToken,
			refreshToken,
		}
	}

	async saveRefreshToken(userId, refreshToken) {
		const tokenData = await TokenModel.findOne({ user: userId })

		// save a new refresh token
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}

		// Save token if user doesn't have it
		const token = await TokenModel.create({
			user: userId,
			refresh: refreshToken,
		})
		return token
	}

	async removeToken(refreshToken) {
		const tokenData = await TokenModel.remove({ refresh: refreshToken })
		return tokenData
	}

	async findToken(refreshToken) {
		const tokenData = await TokenModel.findOne({ refresh: refreshToken })
		return tokenData
	}
}

module.exports = new TokenService()
