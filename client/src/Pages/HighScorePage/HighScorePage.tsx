import React, { useState } from 'react'
// ==== icons ====
import crown from '../../assets/icons/crown.svg'
// ==== Styles ====
import cl from './HighScorePage.module.scss'
import cn from 'classnames'
// ==== Components ====
import HightScore from '../../components/HightScore'
import PageTitle from '../../components/PageTitle'


const HighScorePage = () => {


	return (
		<>
			<header>
				<PageTitle iconUrl={crown} iconAlt='crown'>
					High Score
				</PageTitle>

			</header>

			<div
				className={cn(
					cl['table-inner'],
					cl['table-inner_marg'],
					cl['table-inner_pad']
				)}
			>
				<HightScore />

			</div>
		</>
	)
}

export default HighScorePage