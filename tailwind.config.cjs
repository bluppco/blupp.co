/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {

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
