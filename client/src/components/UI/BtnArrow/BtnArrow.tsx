import React, { FC, HTMLAttributes } from 'react'
// ==== Assets ====
import arrow from '../../../assets/icons/arrow.svg'
// ==== Styles ====
import cl from './BtnArrow.module.scss'
import cn from 'classnames'

export enum ArrowLookEnum {
	left,
	right,
}

interface IBtnArrow extends HTMLAttributes<HTMLButtonElement> {
	arrowLook?: ArrowLookEnum
}

const BtnArrow: FC<IBtnArrow> = ({ arrowLook, className, ...props }) => {
	return (
		<button className={cn(cl.btn, className)} {...props}>
			<img
				className={cn(
					cl.arrow,
					arrowLook === ArrowLookEnum.right && cl['arrow_see-right']
				)}
				src={arrow}
				alt=''
			/>
		</button>
	)
}

export default BtnArrow
