import { ChangeEvent, useState } from "react";

export const useInput = () => {

	const [value, setValue] = useState('')

	const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}

	console.log(value)

	return {
		value,
		handleValue
	}

}