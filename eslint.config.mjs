import { defineConfig } from 'eslint/config';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: 'detect', // auto-detect React version
      },
    },
    rules: {
      quotes: ['error', 'single'], // use single quotes
      'no-trailing-spaces': 'error', // disallow trailing spaces
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/self-closing-comp': 'error',
      'react/jsx-wrap-multilines': [
        'error',
        {
          declaration: 'parens-new-line',
          assignment: 'parens-new-line',
          return: 'parens-new-line',
          arrow: 'parens-new-line',
          condition: 'parens-new-line',
          logical: 'parens-new-line',
          prop: 'parens-new-line',
        },
      ],
      'operator-linebreak': ['error', 'before'], // place && or || at the beginning of line
    },
  },
  pluginReact.configs.flat.recommended,
]);
