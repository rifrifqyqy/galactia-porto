import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			keyframes: {
				blink: {
					'50%': { opacity: '0' }
				}
			},
			animation: {
				blink: 'blink 0.7s step-start infinite'
			}
		}
	},

	plugins: []
} satisfies Config;
