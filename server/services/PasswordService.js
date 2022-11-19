const bcrypt = require('bcryptjs')

class PasswordService {
	async hashPassword(password, salt = process.env.PASSWORD_HASH_SALT || 3) {
		return await bcrypt.hash(password, +salt)
	}

	comparePassword(password, hashPassword) {
		return bcrypt.compareSync(password, hashPassword)
	}
}

module.exports = new PasswordService()
