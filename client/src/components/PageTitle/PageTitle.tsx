import React, { FC, ReactNode } from 'react'
// ==== Styles ====
import cl from './PageTitle.module.scss'
import cn from 'classnames'

interface IPageTitle {
	iconUrl: string
	iconAlt: string
	children: ReactNode
}

const PageTitle:FC<IPageTitle> = ({iconUrl, iconAlt, children}) => {
	return (
		<h2 className={cn(cl.title, cl.title_marg)}>
			{children}
			<img className={cl.icon} src={iconUrl} alt={iconAlt} />
		</h2>
	)
}

export default PageTitle
