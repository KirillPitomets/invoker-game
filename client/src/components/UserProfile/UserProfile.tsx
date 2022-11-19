import React, { useEffect } from 'react'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== React router dom  ====
import { useNavigate } from 'react-router-dom'
// ==== Types ====
import { RouteEnum } from '../../types/route'
import { authActionTypes } from '../../types/reducers/authReducer'
import ErrorMessage from '../UI/ErrorMessage'
import Avatar from '../Avatar'
// ==== Components ====

const UserProfile = () => {
	const { isAuth, user, userDataErrMessage } = useTypedSelector(state => state.auth)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	useEffect(() => {
		if (!isAuth) navigate(`/${RouteEnum.auth}`)
	}, [isAuth])

	useEffect(() => {
		dispatch({ type: authActionTypes.GET_USER })
	}, [])


	if (userDataErrMessage) return (
		<ErrorMessage errors={[userDataErrMessage]} />
	)

	return (
		<div>
			<Avatar photoUrl={user.avatar} name={user.username} />
			<p>{user.username}</p>
		</div>
	)
}

export default UserProfile
