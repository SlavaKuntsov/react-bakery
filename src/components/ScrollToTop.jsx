import { useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
	const { pathname } = useLocation()

	useLayoutEffect(() => {
		window.scrollTo(0, 0)
		console.log('ScrollToTop')
	}, [pathname])

	return null
}
