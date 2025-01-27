// https://docs.expo.dev/guides/using-eslint/
module.exports = {
    settings: {
        react: {
          version: 'detect', // Automatically detect the React version
        },
    },    
    rules: {
        'react/react-in-jsx-scope': 'off', // Disable the rule requiring React in scope
    },
    extends: "expo",
    ignorePatterns: ["/dist/*"],
};
