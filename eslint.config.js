import defaultConfigs from '@gennextech/eslint-react';

const VALID_NAMING_TYPES = [
  'RootState',
  'AppState',
  'AppDispatch',
  'Dispatcher',
  'Prop',
  'Props',
].join('|');

export default config([
  ...defaultConfigs,
  {    
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.node.json'],
      },
    },
  },
  {
    files: ['**/*.tsx'],
    rules: {
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    files: ['**/locales/*.ts'],
    rules: { '@typescript-eslint/naming-convention': ['off'] },
  },
  {
    ignores: ['src/components/shadcn/'],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'interface',
          format: ['PascalCase'],
          prefix: ['I'],
        },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: {
            regex:
              '^(T|Type|Any|Promise|Number|String|Object|Value)[A-Z][a-zA-Z0-9]*|[A-Z][a-zA-Z0-9]*(Type|Promise|Number|String|Object|Value|Like|Prop|Props)$',
            match: true,
          },
          filter: {
            regex: `^(${VALID_NAMING_TYPES})$`,
            match: false,
          },
        },
        {
          selector: 'default',
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'memberLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: ['property', 'objectLiteralProperty', 'typeProperty'],
          format: null,
          filter: {
            regex: '^smart_count$',
            match: true,
          },
        },
        {
          selector: 'variableLike',
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'variable',
          types: ['boolean'],
          format: ['PascalCase'],
          prefix: [
            'b',
            'do',
            'is',
            'has',
            'use',
            'can',
            'did',
            'auto',
            'will',
            'with',
            'force',
            'should',
            'error',
            'success',
            'require',
            're',
            'rs',
            'enabled',
            'enable',
            'disabled',
            'disable',
            'activated',
            'activate',
            'deactivated',
            'deactivate',
            'ignore',
          ],
          leadingUnderscore: 'allowSingleOrDouble',
        },
        {
          selector: 'property',
          format: ['PascalCase'],
          filter: { regex: '[-]', match: true },
        },
        {
          selector: ['objectLiteralProperty', 'objectLiteralMethod'],
          format: null,
          modifiers: ['requiresQuotes'],
        },
      ],
    },
  },
  {
    files: ['**/locales/*.ts'],
    rules: { '@typescript-eslint/naming-convention': ['off'] },
  },
])
