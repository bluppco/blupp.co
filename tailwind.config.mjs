/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [ './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	prefix: "",
	theme: {

		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {

			screens: {

				'mac': '1440px',

			},

			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
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

				"inter_tight": ["Inter Tight", "sans-serif"],

			},

			colors: {

				blupp_black: "#030303",
				blupp_gray: "#A3A3A3"

			}
		},
	},
	plugins: [require("tailwindcss-animate")],
}
