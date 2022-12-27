import React, { ChangeEvent, FC, useState } from 'react'
// ==== React hook form ====
import { useForm } from 'react-hook-form'
// ==== Types ====
import { IChangeAvatar } from '../../types/services/UserService'
// ==== Assets ====
import initialAvatar from '../../assets/imgs/avatar.jpg'
// ==== Service ====
import { UserService } from '../../Services/UserService'
// ==== Styles ====
import cl from './Avatar.module.scss'
import cn from 'classnames'
// ==== Components ====
import FileUploadBtn from '../UI/FileUploadBtn'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

interface IAvatar {
	photoUrl: string
	name: string
	canChangeAvatar?: boolean
}

const Avatar: FC<IAvatar> = ({ photoUrl, name, canChangeAvatar = false }) => {
	const { register } = useForm<IChangeAvatar>()

	const sendFile = (e: ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files![0]

		UserService.uploadAvatar({
			avatar: file,
		})
	}

	return (
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
	)
}

export default Avatar
