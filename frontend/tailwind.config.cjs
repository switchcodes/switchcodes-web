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
				bright2: '#F9FAFC',
				darkbg: '#040A17',
				darkblue: '#090D16',
				darkblue2: '#122545',
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
