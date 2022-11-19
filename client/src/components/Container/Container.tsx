import React, { FC, HTMLAttributes, ReactNode } from 'react'
// ==== Styles ====
import cl from './Container.module.scss'
import cn from 'classnames'

interface IContainer  extends HTMLAttributes<HTMLDivElement>{
	children?: ReactNode
}

const Container:FC<IContainer> = ({children, className}) => {
	return (
		<div className={cn(cl.container, className)}>
			{children}
		</div>
	)
}

export default Container
