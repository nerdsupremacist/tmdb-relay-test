module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:relay/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['relay', 'simple-import-sort', '@typescript-eslint', 'react-hooks', 'sort-keys-fix'],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'array-bracket-spacing': ['error', 'never'],
        'arrow-parens': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'eol-last': 'error',
        'indent': [
            'error',
            4,
        ],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreUrls: true,
            },
        ],
        'no-const-assign': 'error',
        'no-extra-parens': ['error', 'functions'],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1,
            },
        ],
        'no-trailing-spaces' : [
            'error',
            {
                'skipBlankLines': true,
            },
        ],
        'no-var': 'error',
        'prefer-template': 'warn',
        quotes: [
            2,
            'single',
            {
                allowTemplateLiterals: true,
                avoidEscape: true,
            },
        ],
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-indent-props': 'warn',
        'react/jsx-sort-props': 'warn',
        'react/prop-types': 'off',
        'relay/compat-uses-vars': 'warn',
        'relay/function-required-argument': 'warn',
        'relay/generated-flow-types': 'warn',
        'relay/graphql-naming': 'error',
        'relay/graphql-syntax': 'error',
        'relay/hook-required-argument': 'warn',
        'relay/must-colocate-fragment-spreads': 'warn',
        'relay/no-future-added-value': 'warn',
        'relay/unused-fields': 'warn',
        semi: ['error', 'always'],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': [
            'error',
            {
                groups: [
                    ['^.*\\u0000$'], // Type imports
                    ['^__generated__/', '^\\./__generated__/', '.graphql$'], // generated graphql stubs
                    ['^react(?!-relay)', 'react$', '^@', 'ui$'], // external react stuff
                    ['^relay', 'relay$', '^babel'], // relay stuff
                    ['^[A-Z]', '\\./[A-Z]'], // internal components
                    ['^use[A-Z]', '\\./use[A-Z]'], // hooks
                    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'], // relative imports
                ],
            },
        ],
        'sort-keys-fix/sort-keys-fix': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                asyncArrow: 'always',
                named: 'never',
            },
        ],
        'space-in-parens': ['error', 'never'],
    },
    settings: {
        react: {
            pragma: 'React',
            version: 'detect',
        },
    },
};
