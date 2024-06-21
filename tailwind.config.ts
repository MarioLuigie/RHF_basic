import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import plugin from 'tailwindcss/plugin'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				jc: {
					bg: '#F5F8FC',
					text1: '#030303',
					text2: '#4F4F4F',
					text3: '#9A9A9A',
					text4: '#747678',
					gray0: '#F0F3F7',
					gray5: '#7B7C7E',
					gray6: '#666666',
					gray7: '#8C8C8C',
					gray8: '#808080',
					gray9: '#DEE0E4',
					gray10: '#DCE2EA',
					blue: '#048AED',
					blue2: '#E6F3FD',
					blue3: '#E6ECF4',
					red: '#D97C7C',
					orange: '#FA9F17',
				},
				gray: {
					DEFAULT: colors.gray[500],
				},
				blue: {
					DEFAULT: colors.blue[500],
				},
				orange: {
					DEFAULT: colors.orange[500],
				},
				red: {
					DEFAULT: colors.red[500],
				},
			},
		},
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.flex-start': {
					display: 'flex',
					justifyContent: 'flex-start',
					alignItems: 'center',
				},
				'.flex-center': {
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				},
				'.flex-between': {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				},
				'.flex-end': {
					display: 'flex',
					justifyContent: 'flex-end',
					alignItems: 'center',
				},
				'.grid-auto-300': {
					gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr));',
				},
			})
		}),
	],
}
export default config
