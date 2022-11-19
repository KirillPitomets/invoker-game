const jwt = require('jsonwebtoken')
// ==== ApiError ====
const TokenService = require('../services/TokenService.js')
// ==== ApiError ====
const ApiError = require('../exceptions/apiError.js')

const authMiddleware = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		next()
	}

	try {
		const authorizationHeader = req.headers.authorization

		if (!authorizationHeader) {
			return next(ApiError.UnauthorizedError())
		}

		const accessToken = authorizationHeader.split(' ')[1]

		if (!accessToken) {
			return next(ApiError.UnauthorizedError())
		}

		const userData = TokenService.validateAccessToken(accessToken)

		req.user = userData

		next()
	} catch (e) {
		console.log(e)

		return next(ApiError.UnauthorizedError())
	}
}

module.exports = authMiddleware
