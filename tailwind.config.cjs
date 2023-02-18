/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx,ts,tsx}',
		'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': {
					100: 'rgba(209, 148, 57, 0.1)',
					200: 'rgba(209, 148, 57, 0.4)',
					600: '#D19439',
				},
				'secondary': {
					600: 'rgba(22, 46, 64, 0.9)',
				},
				'brand-text': {
					200: 'rgba(117, 117, 117, 1)',
					600: 'rgba(34, 34, 34, 1)',
				},
			},
		},
	},
	plugins: [require('flowbite/plugin')],
};
