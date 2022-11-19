import React from 'react'
// ==== Spell ====
import { emptySpell } from '../../global/allSpells'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { idSpellEnum, ISpell } from '../../types/spells'
// ==== Components ====
import SpellWithHotKey from '../UI/SpellWithHotKey'

const ActiveSpells = () => {
	const { activeSpells } = useTypedSelector(state => state.spell)
	const { hotkeys } = useTypedSelector(state => state.hotkeys)
	const { allSpells } = useTypedSelector(state => state.theme)

	const generateForDisplay = (
		activeSpells: idSpellEnum[],
		allSpells: ISpell[]
	): ISpell[] => {
		return activeSpells.map(spellId => {
			if (spellId === idSpellEnum.empty) {
				return emptySpell
			} else {
				return allSpells.find(spell => spell.id === spellId)!
			}
		})
	}

	return (
		<>
			{generateForDisplay(activeSpells, allSpells).map((spell, indx) => (
				<SpellWithHotKey
					key={`${Math.random()} ${spell.id}`}
					hotkey={
						indx === 0
							? hotkeys.theFirstActiveSpell
							: hotkeys.theSecondActiveSpell
					}
					name={spell.name}
					isStaticPhoto={false}
					photoUrl={spell.img}
					alt={spell.name}
				/>
			))}
		</>
	)
}

export default ActiveSpells
