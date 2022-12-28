import { useCallback, useRef } from 'react'

export const useDebounce = <A extends unknown, R extends unknown>(cb: (args: A) => R, delay: number) => {

	const timer = useRef<ReturnType<typeof setTimeout>>()

	const debounceCallBack = useCallback((args: A) => {
		if (timer.current) {
			clearTimeout(timer.current)
		}

		timer.current = setTimeout(() => {
			cb(args)
		}, delay)

	}, [delay, cb])

	return [debounceCallBack]
}