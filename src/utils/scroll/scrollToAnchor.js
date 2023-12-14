const scrollToAnchor = anchorName => {
	if (anchorName) {
		const anchorElement = document.getElementById(anchorName)
		if (anchorElement) {
			console.log('top scroll')
			anchorElement.scrollIntoView({ behavior: 'smooth' })
		}
	}
}

export default scrollToAnchor