
export enum TimerActionTypes {
	'MINUS_ONE_SECOND' = 'MINUS_ONE_SECOND',
	'SET_TIME_FOR_TIMER' = 'SET_TIME_FOR_TIMER',
}

export interface State {
	remainingTime: number
}

export type payloadSetTimeForTimer = {
	time: number
}

interface IActionSetTimeForTimer {
	type: TimerActionTypes.SET_TIME_FOR_TIMER
	payload: payloadSetTimeForTimer
}

interface IActionMinusSecond {
	type: TimerActionTypes.MINUS_ONE_SECOND
}


export type IAction = IActionMinusSecond | IActionSetTimeForTimer