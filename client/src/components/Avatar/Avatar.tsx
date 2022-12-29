import React, { ChangeEvent, FC } from 'react'
// ==== React hook form ====
import { useForm } from 'react-hook-form'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { uploadAvatar } from '../../store/action-creators/user'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Types ====
import { IChangeAvatar } from '../../types/services/UserService'
// ==== Assets ====
import initialAvatar from '../../assets/imgs/avatar.jpg'
// ==== Styles ====
import cl from './Avatar.module.scss'
import cn from 'classnames'
// ==== Components ====
import FileUploadBtn from '../UI/FileUploadBtn'
import ErrorMessage from '../UI/ErrorMessage'

interface IAvatar {
	photoUrl: string
	name: string
	canChangeAvatar?: boolean
}

const Avatar: FC<IAvatar> = ({ photoUrl, name, canChangeAvatar = false }) => {
	const { register } = useForm<IChangeAvatar>()
	const { uploadAvatarError } = useTypedSelector(state => state.error)
	const dispatch = useDispatch()

	const sendFile = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files![0]

		dispatch(uploadAvatar({ avatar: file }))
	}

	return (
		<div className={cl.wrapper}>
			<div className={cn(cl.avatar, cl.avatar_marg)}>
				<img
					className={cl.avatar__photo}
					src={photoUrl || initialAvatar}
					alt={name}
				/>

				{canChangeAvatar ? (
					<>
						<div className={cl['change-avatar-btn']}>
							<FileUploadBtn
								acceptFiles='.png, .jpeg, .jpg'
								inputId='user-avatar-upload'
								text='Change Avatar'
								registrationInForm={register('avatar')}
								onChange={sendFile}
							/>
						</div>
					</>
				) : null}
			</div>

			{canChangeAvatar ? <ErrorMessage errors={[uploadAvatarError]} /> : null}
		</div>
	)
}

export default Avatar
