import React, { useEffect } from 'react'
// ==== React hook form ====
import { useForm, SubmitHandler } from 'react-hook-form'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import {
	changePassword,
	changeUsername,
	logout,
} from '../../store/action-creators/user'
import { hideMainPopUp } from '../../store/action-creators/popup'
// ==== React router dom  ====
import { useNavigate } from 'react-router-dom'
// ==== Types ====
import { RouteEnum } from '../../types/route'
import {
	IChangeUsername,
	IChangeUserPassword,
} from '../../types/services/UserService'
// ==== Styles ====
import cl from './UserProfile.module.scss'
// ==== Components ====
import ErrorMessage from '../UI/ErrorMessage'
import Avatar from '../Avatar'
import Button from '../UI/Button'
import ChangeUsernameForm from '../ChangeUsernameForm'
import ChangeUserPasswordForm from '../ChangeUserPasswordForm'

const UserProfile = () => {
	const { isAuth, user } = useTypedSelector(state => state.user)
	const { isServerWorking } = useTypedSelector(
		state => state.error
	)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutUser = () => {
		dispatch(logout())
		navigate('/')
		dispatch(hideMainPopUp())
	}

	// ==== Change username ====
	// =========================
	const onSubmitUsername: SubmitHandler<IChangeUsername> = data => {
		dispatch(changeUsername(data))
	}

	// ==== Change password ====
	// =========================
	const onSubmitPassword: SubmitHandler<IChangeUserPassword> = data => {
		dispatch(changePassword(data))
	}

	useEffect(() => {
		if (!isAuth) navigate(`/${RouteEnum.auth}`)
	}, [])

	if (!isServerWorking)
		return <ErrorMessage errors={['Server is not working now. Try later']} />

	return (
		<div className={cl.container}>
			<div className={cl.wrapper}>
				<div className={cl['avatar-wrapper']}>
					<Avatar
						photoUrl={user.avatar}
						name='Your avatar :)'
						canChangeAvatar={true}
					/>
				</div>

				<div className={cl.inner}>
					{/* Change username */}
					<ChangeUsernameForm onSubmit={onSubmitUsername} />

					{/* Change password */}
					<ChangeUserPasswordForm onSubmit={onSubmitPassword} />
				</div>
			</div>
			<Button onClick={logoutUser}>Logout</Button>
		</div>
	)
}

export default UserProfile
