import React from 'react'
// ==== Router ====
import { Link } from 'react-router-dom'
// ==== Redux ====
import { useDispatch } from 'react-redux'
import { showMainPopUp } from '../../store/action-creators/popup'
// ==== Hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Types ====
import { navbarUserIsAuth, navbarUserIsNotAuth, INavbar } from './navbarBtns'
// ==== Styles ====
import cl from './Navbar.module.scss'
import cn from 'classnames'

const determineAuth = (isAuth: boolean): INavbar[] => {
	return isAuth ? navbarUserIsAuth : navbarUserIsNotAuth
}

const Navbar = () => {
	const dispatch = useDispatch()
	const { isAuth } = useTypedSelector(state => state.user)

	const handlePopup = () => dispatch(showMainPopUp())

	return (
		<ul className={cn(cl.navbar, cl.navbar_marg)}>
			{determineAuth(isAuth).map(item => (
				<li key={item.id}>
					<Link to={item.path} onClick={handlePopup} className={cl.navbar__btn}>
						<img className={cl.navbar__icon} src={item.icon} alt={item.id} />
					</Link>
				</li>
			))}
		</ul>
	)
}

export default Navbar
