module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true, // Defines things like process.env when generating through node
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: [
    'import', // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    'react-helpers',
  ],
  root: true, // For configuration cascading.
  rules: {
    'react-helpers/no-named-useeffect-functions': 2,
    'react-helpers/prefer-use-state-lazy-initialization': 2,
    'eol-last': 'error',
    'import/order': [
      'warn',
      {
        alphabetize: {
          caseInsensitive: true,
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          'index',
          'sibling',
          'parent',
          'internal',
        ],
      },
    ],
    //'no-console': 'warn',
    'no-duplicate-imports': 'warn',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            message: "Please use import foo from 'lodash-es/foo' instead.",
            name: 'lodash',
          },
          {
            message:
              'Avoid using chain since it is non tree-shakable. Try out flow instead.',
            name: 'lodash-es/chain',
          },
          {
            importNames: ['chain'],
            message:
              'Avoid using chain since it is non tree-shakable. Try out flow instead.',
            name: 'lodash-es',
          },
          {
            message: "Please use import foo from 'lodash-es/foo' instead.",
            name: 'lodash-es',
          },
        ],
        patterns: ['lodash/**', 'lodash/fp/**'],
      },
    ],
    'react/no-unescaped-entities': 0,
    'no-unused-vars': 'warn',
    'react/jsx-curly-spacing': [
      'warn',
      {
        allowMultiline: true,
        children: {
          when: 'never',
        },
        spacing: {
          objectLiterals: 'never',
        },
        when: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
    'react/jsx-indent-props': ['error', 2],
    'react/prop-types': 'warn',
    semi: 'warn',
    'sort-imports': [
      'warn',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Detect react version
    },
  },
};
