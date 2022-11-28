import React, { FC } from 'react'
// ==== Assets ====
import initialAvatar from '../../assets/imgs/avatar.jpg'
// ==== Styles ====
import cl from './Avatar.module.scss'
import cn from 'classnames'
// ==== Components ====
import FileUploadBtn from '../UI/FileUploadBtn'

interface IAvatar {
	photoUrl: string
	name: string
	canChangeAvatar?: boolean
}

const Avatar: FC<IAvatar> = ({ photoUrl, name, canChangeAvatar = false }) => {
	return (
		<div className={cn(cl.avatar, cl.avatar_marg)}>
			<img
				className={cl.avatar__photo}
				src={photoUrl || initialAvatar}
				alt={name}
			/>
			{canChangeAvatar ? (
				<div className={cl['btn-wrapper']}>
					<FileUploadBtn inputId='user-avatar-upload' />
				</div>
			) : null}
		</div>
	)
}

export default Avatar
