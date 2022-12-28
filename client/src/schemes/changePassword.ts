import { object, SchemaOf, string } from 'yup'
import { IChangeUserPassword } from '../types/services/UserService'

const changePasswordSchema: SchemaOf<IChangeUserPassword> = object({
	password: string().required('Password is required').min(8).max(16),
	passwordConfirmation: string()
		.test('password-match', 'Confirm your password', function (value) {
			return this.parent.password === value
		})
		.required(),
})

export default changePasswordSchema
