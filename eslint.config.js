import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'
import { globalIgnores } from 'eslint/config'

export default tseslint.config([
  globalIgnores(['dist']),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  reactHooks.configs['recommended-latest'],
  reactRefresh.configs.vite,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      import: importPlugin
    },
    settings: {
      'import/resolver': {
        typescript: {},
        node: true
      }
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_'
        }
      ],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'arrow-body-style': ['error', 'as-needed'],
      'prefer-const': 'error',
      'import/order': [
        'warn',
        {
          // incluye también relativos y types para que los ordene
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          pathGroups: [{ pattern: 'react', group: 'external', position: 'before' }],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never',
          alphabetize: { order: 'asc', caseInsensitive: true }
        }
      ]
    }
  }
])
