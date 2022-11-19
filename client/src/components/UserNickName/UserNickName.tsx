import React, { FC, HTMLAttributes } from 'react'
// ==== Styles ====
import cl from './UserNickName.module.scss'
import cn from 'classnames'

interface IUserNickName extends HTMLAttributes<HTMLParagraphElement> {
	name: string
}


const UserNickName:FC<IUserNickName> = ({name, className, ...props}) => {
	return <p className={cn(cl.name, className)}>{name}</p>
}

export default UserNickName
