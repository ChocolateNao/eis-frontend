module.exports = {
  // files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react-refresh', 'react-hooks', 'react', 'import', 'prettier'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': ['warn', { allow: ['error'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['state'] },
    ],
    'prettier/prettier': 'error',
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
};
