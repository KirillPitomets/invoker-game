export enum recordActionTypes {
	'ADD_RECORD' = 'ADD_RECORD',
	'GET_ALL_RECORDS_BY_CATEGORY' = 'GET_ALL_RECORDS_BY_CATEGORY',
	'GET_ONE_RECORD' = 'GET_ONE_RECORD',
}

export interface ITimeRecord {
	id: string
	userName: string
	recordTime: number
	spells: number
}

export interface ISpellsRecord {
	id: string
	userName: string
	recordSpells: number
	time: number
}

export interface IState {
	timeRecords: ITimeRecord[]
	spellsRecords: ISpellsRecord[]
}

interface IAddRecordAction {
	type: recordActionTypes.ADD_RECORD
}

interface IGetAllRecordsAction {
	type: recordActionTypes.GET_ALL_RECORDS_BY_CATEGORY
}

interface IGetOneRecordAction {
	type: recordActionTypes.GET_ONE_RECORD
}

export type IAction =
	| IAddRecordAction
	| IGetAllRecordsAction
	| IGetOneRecordAction
