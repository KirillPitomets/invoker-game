import React, { FC } from 'react'
// ==== Hooks ====
import { useForm } from 'react-hook-form'
import { useDebounce } from '../../hooks/useDebounce'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Yup ====
import changeUsernameSchema from '../../schemes/changeUsername'
import { yupResolver } from '@hookform/resolvers/yup'
// ==== Types ====
import { IChangeUsername, InputNames } from '../../types/services/UserService'
// ==== Components ====
import EditableDataRow from '../EditableDataRow'

interface IChangeUsernameProps {
	onSubmit: (data: IChangeUsername) => void
}

const ChangeUsernameForm: FC<IChangeUsernameProps> = ({ onSubmit }) => {
	const { user } = useTypedSelector(state => state.user)
	const { usernameChangeError } = useTypedSelector(staet => staet.error)

	const {
		register: inputUsernameRegister,
		handleSubmit: handleSubmitUsername,
		formState: { errors },
		setValue,
	} = useForm<IChangeUsername>({
		defaultValues: { username: user.username },
		resolver: yupResolver(changeUsernameSchema),
	})

	const [changeUsernameDebounce] = useDebounce<IChangeUsername, void>(
		onSubmit,
		500
	)

	return (
		<form onSubmit={handleSubmitUsername(changeUsernameDebounce)}>
			<EditableDataRow
				title='Username'
				cancelFunction={() => setValue(InputNames.username, user.username)}
				registerInForm={inputUsernameRegister(InputNames.username)}
				errors={[errors.username?.message!, usernameChangeError]}
			/>
		</form>
	)
}

export default ChangeUsernameForm
