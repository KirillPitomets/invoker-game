import React, { FC } from 'react'
// ==== Assets ====
import invoker from '../../assets/imgs/avatar.jpg'
// ==== Styles ====
import cl from './Avatar.module.scss'
import cn from 'classnames'


interface IAvatar {
	photoUrl: string
	name: string
}

const Avatar: FC<IAvatar> = ({ photoUrl, name }) => {
	return (
		<div className={cn(cl.avatar, cl.avatar_marg)}>
			<img className={cl.avatar__photo} src={photoUrl} alt={name} />
		</div>
	)
}

export default Avatar
