'use strict'
// ==== Models ====
const UserModel = require('../models/UserModel.js')
// ==== DTO ====
const UserDto = require('../dtos/userDto.js')
// ==== Errors ====
const ApiError = require('../exceptions/apiError')
// ==== Services ====
const FileService = require('./FileService.js')
const PasswordService = require('./PasswordService.js')
const TokenService = require('./TokenService.js')
const TokenModel = require('../models/TokenModel.js')

class UserService {
	async registration(username, password, picture) {
		const candidate = await UserModel.findOne({ username })

		if (candidate) {
			throw ApiError.BadRequest(
				`User with Name: ${candidate.username} already registered`
			)
		}

		const user = new UserModel({
			username,
			password: await PasswordService.hashPassword(password),
		})
		console.log(user)
		
		await user.save()
		const userDto = new UserDto(user)
		const tokens = TokenService.generateTokens({ ...userDto })

		await TokenService.saveRefreshToken(userDto.id, tokens.refreshToken) // saving a refresh token in DB

		return {
			user: userDto,
			...tokens,
		}
	}

	async login(username, password) {
		const user = await UserModel.findOne({ username })

		if (!user) {
			throw ApiError.BadRequest('User not found')
		}

		const isPassEquals = PasswordService.comparePassword(
			password,
			user.password
		)

		if (!isPassEquals) {
			throw ApiError.BadRequest('Invalid password')
		}

		const userDto = new UserDto(user)

		const tokens = TokenService.generateTokens({ ...userDto })
		await TokenService.saveRefreshToken(userDto.id, tokens.refreshToken) // saving a refresh token in DB

		return {
			user: userDto,
			...tokens,
		}
	}

	async logout(refreshToken) {
		await TokenService.removeToken(refreshToken)
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}

		const userData = TokenService.validateRefreshToken(refreshToken)
		const tokenFromDb = TokenService.findToken(refreshToken)

		console.log('User data token service', userData)

		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}

		const user = await UserModel.findById(userData.id)
		const userDto = new UserDto(user)
		const tokens = TokenService.generateTokens({ ...userDto })

		await TokenService.saveRefreshToken(userDto.id, tokens.refreshToken) // saving refresh token in DB
		return {
			...tokens,
			user: userDto,
		}
	}

	async changeUsername({ userId, username }) {

		const candidate = await UserModel.findOne({ username })


		if (candidate) {
			throw ApiError.BadRequest(`Username "${username}" already someone using`)
		}

		await UserModel.updateOne(
			{ _id: userId }, // find by id
			{ username } // new data
		)

		const user = await UserModel.findById(userId)
		const userDto = new UserDto(user)
		return { user: userDto }
	}

	async changePassword({ userId, password }) {
		if (!password) {
			throw ApiError.BadRequest('invalid password')
		}

		const hashedPassword = await PasswordService.hashPassword(password)

		await UserModel.updateOne(
			{ _id: userId }, // find by id
			{ password: hashedPassword } // new data
		)

		const user = await UserModel.findById(userId)
		const userDto = new UserDto(user)
		
		return { user: userDto }
	}

	async changeAvatar({ userId, avatar }) {
		if (!avatar) {
			throw ApiError.BadRequest('No avatar')
		}

		const isImg = FileService.isImg(avatar.name)

		if (!isImg) {
			throw ApiError.BadRequest('This is not an image or invalid image extension . Only .png, .jpg, .jpeg available')
		}

		const { avatar: currentUserAvatarName } = await UserModel.findById(userId)

		if (currentUserAvatarName) {
			FileService.deleteFile(currentUserAvatarName)
		}

		const fileName = FileService.saveAvatar({
			userId,
			file: avatar,
		})

		await UserModel.updateOne(
			{ _id: userId }, // find by id
			{ avatar: fileName } // new data
		)

		const user = await UserModel.findById(userId)
		const userDto = new UserDto(user)

		return { user: userDto }
	}
}

module.exports = new UserService()
