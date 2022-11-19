import { ImgHTMLAttributes } from "react"

export enum borderRadiusSideEnum {
	left,
	right
}

export interface ISpellProps extends ImgHTMLAttributes<HTMLImageElement> {
	photoUrl: string
	isStaticPhoto?: boolean
	borderRadiusSide?: borderRadiusSideEnum,
}