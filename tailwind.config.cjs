/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				manrope: 'Manrope Variable',
				montserrat: 'Montserrat',
				inter: 'Inter'
			}
		}
	},

	plugins: []
};

module.exports = config;
