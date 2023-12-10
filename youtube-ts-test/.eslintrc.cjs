/**
 * @see https://db2dev.tistory.com/entry/ESLint-importorder-규칙-설정하고-뒤죽박죽-import-코드-개선하기#newlines-between
 */
const importOrderRules = [
  'error',
  {
    groups: [
      'type',
      'builtin',
      'external',
      'internal',
      'parent',
      'sibling',
      'index',
      'object',
      'unknown',
    ],
    pathGroups: [
      {
        pattern: '@/react*',
        group: 'external',
        position: 'before',
      },
      {
        pattern: '@/hooks/*',
        group: 'internal',
        position: 'after',
      },
      {
        pattern: '@/pages/*',
        group: 'internal',
        position: 'after',
      },
      {
        pattern: '@/components/*',
        group: 'internal',
        position: 'after',
      },
      {
        pattern: '*.style',
        group: 'unknown',
      },
    ],
    pathGroupsExcludedImportTypes: ['@tanstack*'],
    alphabetize: {
      order: 'asc',
    },
  },
]

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'plugin:react/recommended', // self closing tag룰 적용하기 위해서 "eslint-plugin-react" 추가 설치
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'import/order': importOrderRules,
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
}
