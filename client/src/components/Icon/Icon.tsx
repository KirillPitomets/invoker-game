import React, { FC } from 'react'
// ==== Styles ====
import cl from './Icon.module.scss'
import cn from 'classnames'

interface IIcon extends React.ImgHTMLAttributes<HTMLImageElement> {
	photoName: string
}

const Icon: FC<IIcon> = ({ photoName, className, ...props }) => {
	return (
		<img
			className={cn(cl.icon, className)}
			src={photoName}
			{...props}
	/>
	)
}

export default Icon
