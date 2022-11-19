import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Components ====
import Spell from '../UI/Spell'

const FollowingSpell = () => {
	const { followingSpell } = useTypedSelector(state => state.spell)
	const { allSpells } = useTypedSelector(state => state.theme)

	const getImgSpell = (): string => {
		return allSpells.find( spell => spell.id === followingSpell )?.img!
	}

	return <Spell image={getImgSpell()} />
}

export default FollowingSpell
