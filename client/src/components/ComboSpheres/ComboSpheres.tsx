import React from 'react'
// ==== Types ====
import { ISphere, sphereNameEnum } from '../../types/spheres'
// ==== Hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './ComboSpheres.module.scss'
import cn from 'classnames'
// ==== Components ====
import Spell from '../UI/Spell'

interface IGenerateComboForDisplay {
	combo: sphereNameEnum[]
	allSpheres: ISphere[]
}

const generateComboForDisplay = ({
	combo,
	allSpheres,
}: IGenerateComboForDisplay): ISphere[] => {
	return combo.map(id => {
		return allSpheres.find(sphere => sphere.id === id)!
})
}

const ComboSpheres = () => {
	const { combo } = useTypedSelector(state => state.spell)
	const { allSpheres } = useTypedSelector(state => state.theme)

	return (
		<>
			<div className={cn(cl.wrap, cl.wrap_marg)}>
				{generateComboForDisplay({ combo, allSpheres }).map(sphere => (
					<Spell
						key={`${Math.random()}  ${sphere.id}`}
						image={sphere.photoUrl}
						alt={sphere.name}
					/>
				))}
			</div>
		</>
	)
}

export default ComboSpheres
