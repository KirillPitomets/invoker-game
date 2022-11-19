import React, { FC, HTMLAttributes } from 'react'
// ==== Icons ====
import resetIcon from '../../../assets/icons/reset-arrow.svg'
// ==== Styles ====
import cl from './ResetBtn.module.scss'
import cn from 'classnames'

interface IResetBtn extends HTMLAttributes<HTMLButtonElement> {}

const ResetBtn: FC<IResetBtn> = ({ className, ...props }) => {
	return (
		<button className={cn(cl.btn, className)} {...props}>
			<img className={cl.img} src={resetIcon} alt='Set a default bg' />
		</button>
	)
}

export default ResetBtn
