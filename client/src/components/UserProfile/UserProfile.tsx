import React, { useEffect } from 'react'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { logout } from '../../store/action-creators/auth'
import { hideMainPopUp } from '../../store/action-creators/popup'
// ==== React router dom  ====
import { useNavigate } from 'react-router-dom'
// ==== Types ====
import { RouteEnum } from '../../types/route'
// ==== Styles ====
import cl from './UserProfile.module.scss'
// ==== Components ====
import ErrorMessage from '../UI/ErrorMessage'
import Avatar from '../Avatar'
import EditableDataRow from '../EditableDataRow'
import Button from '../UI/Button'

const UserProfile = () => {
	const { isAuth, user } = useTypedSelector(state => state.auth)
	const { isServerWorking } = useTypedSelector(state => state.error)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const logoutUser = () => {
		dispatch(logout())
		navigate(`/`)
		dispatch( hideMainPopUp())
	}

	useEffect(() => {
		if (!isAuth) navigate(`/${RouteEnum.auth}`)
	}, [])

	if (!isServerWorking)
		return <ErrorMessage errors={['Server is not working now. Try later']} />

	return (
		<div className={cl.wrapper}>
			<Avatar
				photoUrl={user.avatar}
				name={user.username}
				canChangeAvatar={true}
			/>

			<div className={cl.inner}>
				<EditableDataRow
					title='Username'
					initialText={user.username}
					submit={text => console.log(text)}
				/>

				<EditableDataRow
					title='Password'
					initialText='This your password :3'
					isPasswordInput={true}
					submit={text => console.log(text)}
				/>
			</div>

			<Button onClick={logoutUser}>Logout</Button>
		</div>
	)
}

export default UserProfile
