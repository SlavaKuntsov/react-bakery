import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { copy } from 'vite-plugin-copy'
import { resolve, parse } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/home',
	plugins: [
		react(),
		reactRefresh(),
		copy({
			patterns: [
				{ from: 'src/assets', to: 'media' } // Измените путь, если ваши изображения находятся в другой папке
			]
		})
	],
	resolve: {
		alias: {
			react: 'react' // Проверьте, что это указывает на правильный путь к модулю React
		}
	},
	build: {
		assetsInlineLimit: 0,
		rollupOptions: {
			// external: [
			// 	'react',
			// 	'react-dom',
			// 	'redux',
			// 	'redux-persist/integration/react'
			// ]
			output: {
				assetFileNames: asset => {
					if (parse(asset.name).name === 'externalImage') {
						return 'images/src/[name][extname]'
					}
					return 'assets/[name].[hash][extname]'
				}
			}
		}
	}
})
