import React, { FC, HTMLAttributes, ReactNode } from 'react'
// ==== Styles ====
import cl from './Title.module.scss'
import cn from 'classnames'

interface ITitle extends HTMLAttributes<HTMLHeadingElement>{
	children: ReactNode
}

const Title:FC<ITitle> = ({children, className, ...props}) => {
	return (
		<h3 className={cn(cl.title, className)} {...props}>
			{children}
		</h3>
	)
}

export default Title
