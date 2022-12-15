const Router = require('express')
const { body, check } = require('express-validator')
// ==== Controller ====
const UserController = require('../controllers/UserController.js')
// ==== Middlewares ====
const authMiddleware = require('../middleware/authMiddleware.js')

const router = new Router()

router.post(
	'/registration',
	body('username')
		.isLength({ min: 3, max: 16 })
		.withMessage('Username cannot be less than 3 characters and more than 16'),
	body('password')
		.isLength({ min: 8, max: 16 })
		.withMessage('Password cannot be less than 8 characters and more than 16'),
	body('passwordConfirmation').custom((value, { req }) => {
		if (value !== req.body.password) {
			throw new Error('Password confirmation does not match password')
		}

		return true
	}),
	UserController.registration
)

router.post(
	'/login',
	body('username').isLength({ min: 3, max: 16 }),
	body('password').isLength({ min: 8, max: 16 }),
	UserController.login
)

router.post('/logout', authMiddleware, UserController.logout)

router.get('/refresh', UserController.refresh)

router.put(
	'/username',
	body('username')
		.isLength({ min: 3, max: 16 })
		.withMessage('Username cannot be less than 3 characters and more than 16'),
	authMiddleware,
	UserController.changeUsername
)

router.put(
	'/password',
	body('password')
		.isLength({ min: 8, max: 16 })
		.withMessage('Password cannot be less than 8 characters and more than 16'),
	authMiddleware,
	UserController.changePassword
)
router.put('/avatar', authMiddleware, UserController.changeAvatar)

router.get('/logout', authMiddleware, UserController.logout)

module.exports = router