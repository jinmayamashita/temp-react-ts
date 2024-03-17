// /* eslint-env node */
// module.exports = {
//  extends: [
//   'eslint:recommended',
//   'plugin:@typescript-eslint/recommended-type-checked',
//   'plugin:react/recommended',
//   'plugin:react/jsx-runtime',
//   'plugin:react-hooks/recommended',
//  ],
//  root: true,
//  env: { browser: true, es2022: true },
//  ignorePatterns: ['dist'],
//  settings: {
//   react: {
//    version: 'detect',
//   },
//  },
//  parser: '@typescript-eslint/parser',
//  parserOptions: {
//   sourceType: 'module',
//   project: ['./tsconfig.json', './tsconfig.node.json'],
//  },
//  plugins: ['unicorn'],
//  rules: {
//   'no-console': 2,
//   eqeqeq: 2,
//   'unicorn/filename-case': [2, { case: 'kebabCase' }],
//   'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
//   // Best practices for writing efficient JavaScript code
//   'unicorn/no-array-for-each': 1,
//   'unicorn/no-array-push-push': 1,
//   'unicorn/no-array-reduce': 1,
//   'unicorn/no-for-loop': 1,
//   'unicorn/prefer-array-find': 1,
//   'unicorn/prefer-array-flat': 1,
//   'unicorn/prefer-array-flat-map': 1,
//   'unicorn/prefer-object-from-entries': 1,
//   'unicorn/no-useless-length-check': 1,
//   'unicorn/better-regex': 1,
//   'unicorn/no-negated-condition': 1,
//   'unicorn/prefer-add-event-listener': 1,
//   'unicorn/no-nested-ternary': 2,
//   // Code readability
//   'unicorn/prevent-abbreviations': [2, { allowList: { Props: true } }],
//  },
//  overrides: [
//   {
//    files: ['*.js'],
//    extends: ['plugin:@typescript-eslint/disable-type-checked'],
//   },
//   {
//    files: ['**/*.{ts,tsx}'],
//    rules: {
//     'react/hook-use-state': 2,
//     '@typescript-eslint/naming-convention': [
//      2,
//      {
//       selector: 'default',
//       format: ['camelCase'],
//       leadingUnderscore: 'allow',
//      },
//      {
//       selector: ['variableLike'],
//       format: ['camelCase', 'StrictPascalCase'],
//       leadingUnderscore: 'allow',
//      },
//      { selector: 'typeLike', format: ['PascalCase'] },
//      { selector: 'import', format: null },
//     ],
//     '@typescript-eslint/consistent-type-definitions': [2, 'type'],
//     // React components
//     'react/jsx-no-useless-fragment': 2,
//     'react/forbid-component-props': 2,
//     'react/destructuring-assignment': [2, 'always'],
//     'react/no-danger': 2,
//     'react/jsx-props-no-spreading': 2,
//     'react/jsx-pascal-case': 2,
//     'react/prefer-stateless-function': 2,
//     'react/no-unstable-nested-components': 2,
//    },
//   },
//  ],
// };
