import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), reactRefresh()],
	resolve: {
		alias: {
			react: 'react' // Проверьте, что это указывает на правильный путь к модулю React
		}
	},
	build: {
		rollupOptions: {
			// external: [
			// 	'react',
			// 	'react-dom',
			// 	'redux',
			// 	'redux-persist/integration/react'
			// ]
		}
	}
})
