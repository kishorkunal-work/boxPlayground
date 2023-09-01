/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			gridTemplateColumns: {
				13: 'repeat(13, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
				25: 'repeat(25, minmax(0, 1fr))',
				27: 'repeat(27, minmax(0, 1fr))',
			},
			gridTemplateRows: {
				13: 'repeat(13, minmax(0, 1fr))',
				16: 'repeat(16, minmax(0, 1fr))',
			},
			colors: {
				taikisha: {
					DEFAULT: '#0074be',
					light: '#0074be',
					dark: '#FFFFFFF',
				},
			},
		},
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio'),
		require('@tailwindcss/typography'),
	],
};
