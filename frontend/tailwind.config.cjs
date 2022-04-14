const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const config = {
	mode: 'jit',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				barlow: ['Barlow Condensed', 'sans-serif']
			},
			colors: {
				bright1: '#ffffff',
				darkbg: '#040A17',
				darkblue: '#182D4F',
				darkblue2: '#0A0E18',
				dark0: '#115175',
				dark1: '#269de0',
				dark2: '#52b9f5'
			},
			borderWidth: {
				16: '16px'
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;
