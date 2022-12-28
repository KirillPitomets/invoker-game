import React, { FC, InputHTMLAttributes } from 'react'
// ==== Styles ====
import cl from './FileUploadBtn.module.scss'

interface IFileUploadBtn extends InputHTMLAttributes<HTMLInputElement> {
	inputId: string
	text: string
	registrationInForm?: any
	acceptFiles: string
}

const FileUploadBtn: FC<IFileUploadBtn> = ({
	inputId,
	text,
	acceptFiles,
	registrationInForm,
	...props
}) => {
	return (
		<label className={cl.label} htmlFor={inputId}>
			<p>{text}</p>
			<input
				className={cl.input}
				id={inputId}
				type='file'
				accept={acceptFiles}
				{...registrationInForm}
				{...props}
			/>
		</label>
	)
}

export default FileUploadBtn
