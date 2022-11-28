import { useEffect, useRef } from 'react'

export default function useTimeout<A extends unknown, R extends unknown>(
	cb: (args?: A) => R,
	delay: number
) {
	const savedCallBack = useRef<(args?: A) => R>(cb)

	useEffect(() => {
		savedCallBack.current = cb
	}, [cb])

	useEffect(() => {
		const tick = () => {
			savedCallBack.current()
		}
		if (delay) {
			const timerId = setTimeout(tick, delay)
			return () => clearTimeout(timerId)
		}
	}, [delay])
}
