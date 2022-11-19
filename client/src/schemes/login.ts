import * as yup from 'yup'

const loginSchema = yup
.object({
	username: yup.string().required('Username is required').min(2).max(16),
	password: yup.string().required('Password is required').min(8).max(16),
})
.required()

export default loginSchema