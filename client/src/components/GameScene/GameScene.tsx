import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== action creators ====
import {
	addSpellToCount,
	setStartedStatus,
} from '../../store/action-creators/challenge'
import {
	resetAllSpells,
	setFollowingSpell,
} from '../../store/action-creators/spell'
import handleSpells from '../../utils/HandleSpells'
// ==== Components ====
import ChallengeTimer from '../ChallengeTimer'
import ComboSpheres from '../ComboSpheres'
import FollowingSpell from '../FollowingSpell'
import SpellsList from '../SpellsList'
import SpellsPanel from '../SpellsPanel'
import Button from '../UI/Button'
import RecordText from '../UI/RecordText'

const GameScene = () => {
	const dispatch = useDispatch()

	const { activatedSpells, challengeDurationInSeconds, isChallengeStarted } =
		useTypedSelector(state => state.challenge)
	const { isHideSpellList } = useTypedSelector(state => state.theme)
	const { followingSpell } = useTypedSelector(state => state.spell)
	useEffect(() => {
		document.addEventListener('keydown', handleSpells)

		return () => document.removeEventListener('keydown', handleSpells)
	}, [])

	useEffect(() => {
		if (isChallengeStarted) {
			dispatch(addSpellToCount())
		}
	}, [followingSpell])

	// ==== Other functions ====

	const preparingToLaunchGame = () => {
		dispatch(resetAllSpells())
		dispatch(setFollowingSpell())
	}

	const startGame = () => {
		dispatch(setStartedStatus())
	}

	return (
		<>
			<ChallengeTimer />

			{!isChallengeStarted ? (
				<Button
					onClick={() => {
						preparingToLaunchGame()
						startGame()
					}}
				>
					Start the challenge
				</Button>
			) : null}

			{!isChallengeStarted ? (
				<RecordText record={activatedSpells} unit='spells' />
			) : null}

			{!isHideSpellList ? <SpellsList /> : null}

			<FollowingSpell />
			<ComboSpheres />
			<SpellsPanel />
		</>
	)
}

export default GameScene
