/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

		screens: {

			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'mac': '1440px',
			'2xl': '1536px'

		},

		extend: {

			animation: {
				fade: 'fadeOut 2s ease-in-out',
			},

			keyframes: theme => ({
				fadeOut: {
					'0%': { color: theme('colors.transparent') },
					'100%': { color: theme('colors.slate.900') },
				},
			  }),

			fontFamily: {

				"abril": ["Abril Fatface", "display"],
				"almarai": ["Almarai", "sans-serif"],
				"playfair": ["Playfair Display", "sans-serif"]
			},

			colors: {

				blupp_black: "#030303",
				blupp_gray: "#A3A3A3"

			}

		},
	},
	plugins: [],
}
