// ==== Types ====
import { IState, recordActionTypes, IAction } from '../../types/reducers/recordReducer'
/*
	timeRecords: за N времени N спеллов
	spellRecords: За сколько времени прокастишь N количество спеллов
*/

const initialState: IState = {
	timeRecords: [
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 10,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 123,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 22,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 10,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 123,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 22,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 10,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 123,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 22,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 1,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 1330,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 112,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 41,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 55,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordTime: 10,
			spells: 33,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Vladislav',
			recordTime: 10,
			spells: 22,
		},
	],
	spellsRecords: [
		{
			id: `${Math.random() + Math.random()}`,
			userName: '| KIRUSHA |',
			recordSpells: 10,
			time: 120,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Monster2000',
			recordSpells: 10,
			time: 20,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Nagibator',
			recordSpells: 10,
			time: 10,
		},
		{
			id: `${Math.random() + Math.random()}`,
			userName: 'Пули от бабули',
			recordSpells: 10,
			time: 10,
		},
	],
}

export const recordReducer = (state = initialState, action: IAction) => {
	switch (action.type) {
		case recordActionTypes.ADD_RECORD:
			console.log('add a record')
			return state
		case recordActionTypes.GET_ALL_RECORDS_BY_CATEGORY:
			console.log('get all records ')
			return state
		case recordActionTypes.GET_ONE_RECORD:
			console.log('get one record')
			return state

		default:
			return state
	}
}
