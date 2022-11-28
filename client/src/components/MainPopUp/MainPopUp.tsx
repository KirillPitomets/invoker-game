import React from 'react'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
// ==== action-creators ====
import {
	hideHotkeySwitchPopup,
	hideMainPopUp,
} from '../../store/action-creators/popup'
// ==== Components ====
import PopUpRouter from '../PopUpRoutes'
import PopUp from '../PopUp'

const MainPopUp = () => {
	const dispatch = useDispatch()

	const { isMainPopUpActive } = useTypedSelector(state => state.popUp)

	const hideAllInternalPopUps = () => {
		dispatch(hideHotkeySwitchPopup())
	}

	return (
		<PopUp
			isActive={isMainPopUpActive}
			closePopUp={() => dispatch(hideMainPopUp())}
			hideAllInternalPopUps={hideAllInternalPopUps}
			delay={300}
		>
			<PopUpRouter />
		</PopUp>
	)
}

export default MainPopUp
