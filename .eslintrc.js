module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended', 'plugin:lodash/canonical', 'plugin:security/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'react-hooks', 'small-import', 'lodash'],
  rules: {
    'default-param-last': 'off',
    'consistent-return': 'off',
    'class-methods-use-this': 'off',
    'no-console': ['error', {
      allow: ['warn', 'error']
    }],
    'func-names': 'off',
    'global-require': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-unresolved': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/label-has-for': 'warn',
    'jsx-a11y/anchor-is-valid': ['error', {
      specialLink: ['to']
    }],
    'new-cap': ['error', {
      properties: false
    }],
    'newline-per-chained-call': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': ['error', {
      allowForLoopAfterthoughts: true
    }],
    'no-restricted-syntax': 'off',
    'no-return-assign': [2, 'except-parens'],
    'no-shadow': 'off',
    'no-use-before-define': 'off',
    'prettier/prettier': ['error', {
      /**
       * see https://prettier.io/docs/en/options.html
       */
      arrowParens: 'avoid',
      eol: 'lf',
      parser: 'babel',
      semi: false,
      singleQuote: true,
      trailingComma: 'es5',
      printWidth: 120
    }],
    'object-curly-newline': ['error', {
      consistent: true
    }],
    'react/no-multi-comp': 'off',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': ['error', {
      skipUndeclared: true
    }],
    'react/forbid-prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': ['warn', {
      varsIgnorePattern: '[iI]gnored',
      ignoreRestSiblings: true
    }],
    'react/destructuring-assignment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-fragments': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/no-array-index-key': 'off',
    'import/no-cycle': 'off',
    'require-yield': 'off',
    'padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: 'function',
      next: 'function'
    }],
    'small-import/no-full-import': 'warn',
    'lodash/import-scope': [2, 'method'],
    'lodash/collection-method-value': 'off',
    'lodash/consistent-compose': 'off',
    'lodash/identity-shorthand': 'off',
    'lodash/prefer-lodash-method': 'off',
    'lodash/prefer-includes': 'off',
    'lodash/prefer-noop': 'off',
    'lodash/prefer-find': 'off',
    'lodash/preferred-alias': 'off',
    'lodash/prefer-is-nil': 'off',
    'lodash/prop-shorthand': 'off',
    'lodash/prefer-times': 'off',
    'lodash/prefer-startswith': 'off',
    'lodash/prefer-lodash-chain': 'off',
    'lodash/prefer-constant': 'off',
    'lodash/prefer-lodash-typecheck': 'off',
    'lodash/path-style': 'off',
    'lodash/prefer-immutable-method': 'off',
    'security/detect-object-injection': 'off',
    'security/detect-non-literal-regexp': 'off',
    'import/prefer-default-export': 'off',
    'import/no-duplicates': ['error', {
      considerQueryString: true
    }],
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal'],
      pathGroups: [{
        pattern: 'react',
        group: 'external',
        position: 'before'
      }],
      pathGroupsExcludedImportTypes: ['react'],
      'newlines-between': 'never',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true
      }
    }]
  }
};