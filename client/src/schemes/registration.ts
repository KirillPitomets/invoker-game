import * as yup from 'yup'

const registrationSchema = yup
	.object({
		username: yup.string().required('Username is required').min(2).max(16),
		password: yup.string().required('Password is required').min(8).max(16),
		passwordConfirm: yup
			.string()
			.oneOf([yup.ref('password'), null], 'Confirm your password'),
	})
	.required()

export default registrationSchema