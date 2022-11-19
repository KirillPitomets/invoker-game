import { InputHTMLAttributes } from "react"

export interface ISettingItem extends InputHTMLAttributes<HTMLInputElement> {
	title: string
	des?: string
	hasResetBtn?: boolean
	resetFunction?: () => void
}