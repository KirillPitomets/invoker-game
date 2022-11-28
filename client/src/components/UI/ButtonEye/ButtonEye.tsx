import React, { FC, useState } from 'react'
// ==== Assets ====
import eye from '../../../assets/icons/eye.svg'
import crossedOutEye from '../../../assets/icons/crossedOutEye.svg'
// ==== Styles ====
import cl from './ButtonEye.module.scss'

interface IButtonEye {
	isShow: boolean
	handleShow: () => void
}

const ButtonEye:FC<IButtonEye> = ({isShow, handleShow}) => {

	return (
		<button className={cl['btn-show-password']} onClick={handleShow}>
			{isShow ? (
				<img src={eye} alt='Show password' className={cl.icon} />
			) : (
				<img src={crossedOutEye} alt='Show password' className={cl.icon} />
			)}
		</button>
	)
}

export default ButtonEye
