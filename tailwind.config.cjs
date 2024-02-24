/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#F3E1E7",
				secondary: "#F4513D",
				tertiary: "#F4513D",
				"black-100": "#100d25",
				"black-200": "#090325",
				"white-100": "#27253A",
			},
			boxShadow: {
				card: "0px 35px 120px -15px #211e35",
			},
			screens: {
				xs: "450px",
			},
		},
	},
	plugins: [],
};
