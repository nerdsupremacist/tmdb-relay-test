module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'prefer-template': 'warn',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^.*\\u0000$'], // Type imports 
          ['^__generated__/', '^\\./__generated__/', '.graphql$'], // generated graphql stubs
          ['^react', 'react$', '^@', 'ui$'], // external react stuff
          ['^relay', 'relay$', '^babel'], // relay stuff
          ['^[A-Z]', '\\./[A-Z]'], // internal components
          ['^use[A-Z]', '\\./use[A-Z]'], // hooks
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'] // relative imports
        ]
      }
    ],
    'simple-import-sort/exports': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-indent-props': 'warn',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'relay/graphql-syntax': 'error',
    'relay/compat-uses-vars': 'warn',
    'relay/graphql-naming': 'error',
    'relay/generated-flow-types': 'warn',
    'relay/must-colocate-fragment-spreads': 'warn',
    'relay/no-future-added-value': 'warn',
    'relay/unused-fields': 'warn',
    'relay/function-required-argument': 'warn',
    'relay/hook-required-argument': 'warn',
  },
  plugins: ['simple-import-sort', 'relay', '@typescript-eslint', 'react-hooks'],
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:relay/recommended',
  ],
};
