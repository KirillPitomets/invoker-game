import React, { FC } from 'react'
// ==== Styles ====
import cl from './FileUploadBtn.module.scss'

interface IFileUploadBtn {
	inputId: string
}

const FileUploadBtn: FC<IFileUploadBtn> = ({ inputId}) => {
	return (
		<label className={cl.label}  htmlFor={inputId}>
			<p>Change avatar</p>
			<input className={cl.input} id={inputId} />
		</label>
	)
}

export default FileUploadBtn