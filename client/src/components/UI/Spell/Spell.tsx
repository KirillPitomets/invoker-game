import React, { FC, ImgHTMLAttributes } from 'react'
// ==== Styles ====
import cl from './Spell.module.scss'
import cn from 'classnames'

export enum borderRadiusSideEnum {
	left,
	right,
}

export interface ISpellProps extends ImgHTMLAttributes<HTMLImageElement> {
	image: string
	borderRadiusSide?: borderRadiusSideEnum
}

const Spell: FC<ISpellProps> = ({
	image,
	borderRadiusSide,
	...props
}) => {
	return (
		<div
			className={cn(
				cl.spell,
				borderRadiusSide === borderRadiusSideEnum.left && cl['spell_br-left'],
				borderRadiusSide === borderRadiusSideEnum.right && cl['spell_br-right']
			)}
		>
			{image ? (
				<div className={cl.wrapper}>
					<img
						className={cl.spell__img}
						src={ image }
						{...props}
					/>
				</div>
			) : (
				<div className={cl.wrapper}>
					<div className={cl.spell__void}></div>
				</div>
			)}
		</div>
	)
}

export default Spell
