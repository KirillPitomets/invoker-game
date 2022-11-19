import React, { ReactNode } from 'react'
// ==== Styles ====
import cl from './FlexWrapper.module.scss'

const FlexWrapper = ({ children }: { children: ReactNode }) => {
	return <div className={cl.wrapper}>{children}</div>
}

export default FlexWrapper
