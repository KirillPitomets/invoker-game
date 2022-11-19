import React from 'react'
// ==== Global ====
import Icon from '../Icon'
// ==== Styles ====
import cl from './SpellsList.module.scss'
import cn from 'classnames'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const SpellsList = () => {

	const { allSpells } = useTypedSelector( state => state.theme)


	return (
		<ul className={cl.list}>
			{allSpells.map((spell, indx) => (
				<li
					key={`${Math.random()} | ${spell.name}`}
					className={cn(
						cl.list__item,
						indx === 2 ? cl['list__item_under-line'] : false,
						indx === 5 ? cl['list__item_under-line'] : false
					)} 
				>
					<Icon photoName={spell.img} className={cl.list__icon} />
					{spell.combo.map(sphere => (
						<p
							key={`${Math.random()} | ${sphere}`}
							className={cn(
								cl.sphere,
								cl.sphere_marg,
								cl[`sphere_${sphere}`]
							)}
						>
							{sphere}
						</p>
					))}
				</li>
			))}
		</ul>
	)
}

export default SpellsList
