import React, { useEffect, useState } from 'react'
// ==== Hooks ====
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Redux ====
import { setEndedStatus } from '../../store/action-creators/challenge'
// ==== Styles ====
import cl from './ChallengeTimer.module.scss'

const ChallengeTimer = () => {
	
	const dispatch = useDispatch()

	const { challengeDurationInSeconds, isChallengeStarted } = useTypedSelector( state => state.challenge)

	const [seconds, setSeconds] = useState<number>(challengeDurationInSeconds)

	useEffect(() => {
		const timeout = setTimeout(() => {
			if (seconds !== 0 && isChallengeStarted) {
				setSeconds(second => second - 1)
			} else {
				dispatch(setEndedStatus())
				setSeconds(10)
			}
		}, 1000)

		return () => clearTimeout(timeout)
	}, [seconds, isChallengeStarted])

	return (
		<p className={cl.number}>
			{seconds}
			<span className={cl.unit}>sec</span>
		</p>
	)
}

export default ChallengeTimer
