import React from 'react'
// ==== Styles ====
import cl from './RecordText.module.scss'

interface IRecordText {
	record: string | number
	unit: string
}

const RecordText = ({ record, unit }: IRecordText) => {
	return (
		<p className={cl.record}>
			You used : {record} {unit}
		</p>
	)
}

export default RecordText
