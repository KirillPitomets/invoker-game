import React, { FC } from 'react'
// ==== Styles ====
import cl from './ErrorMessage.module.scss'
import cn from 'classnames'

interface IErrorMessage {
	errors: string[]
}

const ErrorMessage: FC<IErrorMessage> = ({ errors }) => {
	return (
		<>
			{errors.map((errText, indx) => (
				<p key={`${errText}-${indx}`} className={cn(cl.text, cl['text_marg'])}>
					{errText}
				</p>
			))}
		</>
	)
}

export default ErrorMessage
