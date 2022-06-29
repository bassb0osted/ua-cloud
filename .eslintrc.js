// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "react-app",
        "react-app/jest",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    rules: {
        "no-nested-ternary": 1,
        "react/prop-types": 0,
        "@typescript-eslint/no-explicit-any": 1,
        "@typescript-eslint/explicit-module-boundary-types": 1,
        "@typescript-eslint/ban-ts-comment": "off",
        "react-hooks/exhaustive-deps": 0,
        "array-callback-return": 0,
        "jsx-a11y/anchor-is-valid": 0,
        "jsx-a11y/alt-text": 0,
        "import/no-anonymous-default-export": 0,
    },
    plugins: ["react", "@typescript-eslint", "prettier", "react-hooks"],
    settings: {
        react: {
            version: "detect",
        },
    },
    ignorePatterns: ["src/stories/*"],
};
