/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'brown': '#4A1D1F',
				'gray': '#272727',
			},
		},
		// screens: {
		// 	'md': '650px',
		// 	'lg': '1024px',
		// 	'xl': '1280px',
		// 	'2xl': '1536px',
		// }
	},
	plugins: []
}
