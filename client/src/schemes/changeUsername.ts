import { object, SchemaOf, string } from 'yup'
import { IChangeUsername } from '../types/services/UserService'

const changeUsernameSchema: SchemaOf<IChangeUsername> = object({
	username: string().required().min(2).max(16)
})


export default changeUsernameSchema