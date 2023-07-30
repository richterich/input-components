/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			containers: {
				'sm': '40rem',
				'lg': '64rem',
			},
		}
	},

	plugins: [
		require('@tailwindcss/container-queries'),
	]
};

module.exports = config;
