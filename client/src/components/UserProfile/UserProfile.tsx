import React, { useEffect } from 'react'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== React router dom  ====
import { useNavigate } from 'react-router-dom'
// ==== Types ====
import { RouteEnum } from '../../types/route'
// ==== Styles ====
import cl from './UserProfile.module.scss'
// ==== Components ====
import ErrorMessage from '../UI/ErrorMessage'
import Avatar from '../Avatar'
import EditableDataField from '../EditableDataField'
import Button from '../UI/Button'
import { UserService } from '../../Services/UserService'

const UserProfile = () => {
	const { isAuth, user } = useTypedSelector(state => state.auth)
	const { refreshAuthorizationError } = useTypedSelector(state => state.error)

	const navigate = useNavigate()

	useEffect(() => {
		if (!isAuth) navigate(`/${RouteEnum.auth}`)
	}, [isAuth])

	if (refreshAuthorizationError)
		return <ErrorMessage errors={[refreshAuthorizationError]} />

	return (
		<div className={cl.wrapper}>
			<Avatar
				photoUrl={user.avatar}
				name={user.username}
				canChangeAvatar={true}
			/>

			<div className={cl.inner}>
				<EditableDataField
					title='Username'
					initialText={user.username}
					isPasswordInput={false}
					submit={text => console.log(text)}
				/>

				<EditableDataField
					title='Password'
					initialText='This your password :3'
					isPasswordInput={true}
					submit={text => console.log(text)}
				/>
			</div>

			<Button onClick={() => UserService.logout()}>Logout</Button>
		</div>
	)
}

export default UserProfile
