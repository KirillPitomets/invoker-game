import { object, SchemaOf, string } from 'yup'
import { ILogin } from '../types/services/UserService'

const loginSchema: SchemaOf<ILogin> = object({
	username: string().required('Username is required').min(2).max(16),
	password: string().required('Password is required').min(8).max(16),
}).required()

export default loginSchema
