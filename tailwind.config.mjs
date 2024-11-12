/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Playfair Display', 'serif'],
			},
			animation: {
				'slow-zoom': 'slow-zoom 20s ease-out forwards',
				'fade-in': 'fade-in 1s ease-out forwards',
			},
			keyframes: {
				'slow-zoom': {
					'0%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(1.1)' },
				},
				'fade-in': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
		},
	},
	plugins: [],
}