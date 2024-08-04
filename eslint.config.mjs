import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	...tseslint.configs.recommended,
	reactPlugin.configs.flat.recommended,
	{
		rules: {
			"react/jsx-uses-react": 0,
			"react/react-in-jsx-scope": 0,
			"no-console": 2,
			"react/button-has-type": 2,
		},

		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
