import React, { FC, ReactNode } from 'react'
// ==== Styles ====
import cl from './SortBtn.module.scss'
import cn from 'classnames'

interface ISortBtn extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	isActive: boolean
}

const SortBtn: FC<ISortBtn> = ({ isActive, children, className, ...props }) => {
	return (
		<button
			className={cn(cl.btn, isActive && cl.btn_active, className)}
			{...props}
		>
			{children}
		</button>
	)
}

export default SortBtn
