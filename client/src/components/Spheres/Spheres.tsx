import React from 'react'
// ==== Types ====
import { borderRadiusSideEnum } from '../UI/Spell/types'
import { sphereNameEnum } from '../../types/spheres'
// ==== Redux ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Components ====
import SpellWithHotKey from '../UI/SpellWithHotKey'

const Spheres = () => {
	const { hotkeys } = useTypedSelector(state => state.hotkeys)
	const { allSpheres } = useTypedSelector(state => state.theme)

	return (
		<>
			{allSpheres.map(
				(sphere, indx) =>
					sphere.id !== sphereNameEnum.empty && (
						<SpellWithHotKey
							key={`${Math.random()}+${sphere.id}`}
							hotkey={hotkeys[sphere.bind]}
							name={sphere.name}
							photoUrl={sphere.photoUrl}
							borderRadiusSide={
								indx === 0 ? borderRadiusSideEnum.left : undefined
							}
						/>
					)
			)}
		</>
	)
}

export default Spheres
