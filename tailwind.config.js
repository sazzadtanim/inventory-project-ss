module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		// different screen sizes
		// access by using max-w-screen-sm max-w-screen-xl etc or lg:w-20
		screens: {
			'xs': '16em', //16em kore plus kore
			'sm': '32em', //
			'md': '48em', //
			'lg': '64em', //
			'xl': '80em', //
			'2xl': '96em', //
			'3xl': '112em',
			'4xl': '128em', // enough
			'5xl': '144em', // web-large
			'6xl': '160em', //mac pro 13 retina
			'7xl': '176em', // mac pro 15 retina
		},
		fontFamily: {
			happymonkey: " 'Happy Monkey', cursive",
			poppins: "''Poppins', sans-serif",
		},
		extend: {
			colors: {
				green: {
					950: '#2a9d8f',
					1050: '#264653',
				},
				yellow: {
					950: '#e9c46a',
					1050: '#f4a261',
					1150: '#e76f51',
				},
				rong: {
					100: '#BBBE64',
					200: '#EAF0CE',
					300: '#C0C5C1',
					400: '#7D8491',
					500: '#443850',
				},
			},
		},
	},
	plugins: [],
}
