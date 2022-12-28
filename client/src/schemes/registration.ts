import { object, SchemaOf, string } from 'yup'
import { IRegistration } from '../types/services/UserService'

const registrationSchema: SchemaOf<IRegistration> = object({
	username: string().required('Username is required').min(2).max(16),
	password: string().required('Password is required').min(8).max(16),
	passwordConfirmation: string()
		.test('password-match', 'Confirm your password', function (value) {
			return this.parent.password === value
		})
		.required(),
})

export default registrationSchema
