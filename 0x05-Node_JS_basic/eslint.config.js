// eslint.config.js
const globals = require("globals");
const airbnbBase = require('eslint-config-airbnb-base');
const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.es6,
        ...globals.commonjs,
        ...globals.jest,
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
    },
    plugins: {
        jest: jestPlugin, // Add Jest plugin
      },
    rules: {
        ...airbnbBase.rules, // Include Airbnb Base rules
        ...jestPlugin.configs.all.rules, // Include Jest plugin recommended rules
        // Custom rules
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
    },
  },
  {
    files: ['*.js'],
    ignores: ['babel.config.js'],
  }
];
