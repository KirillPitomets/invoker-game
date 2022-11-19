import React, { FC } from 'react'
// ==== SimpleScrollbar ====
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
// ==== Types ====
import { ITimeRecord } from '../../types/reducers/recordReducer'
// ==== Hooks ====
import { useTypedSelector } from '../../hooks/useTypedSelector'
// ==== Styles ====
import cl from './HighScore.module.scss'
import cn from 'classnames'


const sortedRecordsBySpells = (arr: ITimeRecord[]): ITimeRecord[] => {
	return arr.sort((a, b) => b.spells - a.spells)
}

const headerRowElements = [
	{
		id: 'high-score-place',
		title: 'Place',
	},
	{
		id: 'high-score-name',
		title: 'Name',
	},
	{
		id: 'high-score-time',
		title: 'Time',
	},
	{
		id: 'high-score-Spells',
		title: 'Spells',
	},
]

const HighScore = () => {
	const { timeRecords } = useTypedSelector(state => state.records)

	return (
		<>
			<header className={cn(cl.row, cl.row_header)}>
				{headerRowElements.map(el => (
					<p
						key={el.id}
						className={cn(
							cl['cell-name'],
							cl['cell-name_marg'],
							cl['cell-name_pad']
						)}
					>
						{el.title}
					</p>
				))}
			</header>

			<SimpleBar style={{ maxHeight: 500 }} autoHide={false}>
				<div className={cl.wrapper}>
					{sortedRecordsBySpells(timeRecords).map(
						({ id, userName, recordTime, spells }, indx) => (
							<div className={cl.row} key={id}>
								<div className={cn(cl.cell, cl.cell_pad)}>{indx + 1}#</div>
								<div className={cn(cl.cell, cl.cell_pad)}>{userName}</div>
								<div className={cn(cl.cell, cl.cell_pad)}>
									{recordTime} time
								</div>
								<div className={cn(cl.cell, cl.cell_pad)}>{spells} spells</div>
							</div>
						)
					)}
				</div>
			</SimpleBar>
		</>
	)
}

export default HighScore
