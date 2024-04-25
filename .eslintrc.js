module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:i18next/recommended",
        "plugin:storybook/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}",
                '**/src/**/*.test.{ts,tsx}'
            ],
            "parserOptions": {
                "sourceType": "script"
            },
            rules: {
                'i18next/no-literal-string': 'off'
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "i18next",
        "react-hooks"
    ],
    "rules": {
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        '@typescript-eslint/no-explicit-any': 'warn',
        "react/react-in-jsx-scope": "off",
        "react/no-deprecated": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "i18next/no-literal-string": ['error', {markupOnly: true}],
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "error" // Checks effect dependencies
    },
}
