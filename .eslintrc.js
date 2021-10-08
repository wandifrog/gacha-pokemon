const OFF = 0 // Turn the rule off
const WRN = 1 // Turn the rule on as a warning (doesn't affect exit code)
const ERR = 2 // Turn the rule on as an error (exit code will be 1)

module.exports = {
  env: {
    'es6': true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'
  ],
  plugins: [],
  reportUnusedDisableDirectives: true,
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/member-delimiter-style': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/type-annotation-spacing': ERR,
    'array-bracket-spacing': [ERR, 'never'],
    'array-element-newline': [ERR, 'consistent'],
    'arrow-parens': [ERR, 'always'],
    'comma-dangle': [ERR, {'functions': 'never', 'objects': 'always-multiline'}],
    'comma-spacing': [ERR, {'after': true, 'before': false}],
    'curly': [ERR, 'multi'],
    'eol-last': [WRN, 'always'],
    'eqeqeq': WRN,
    'indent': [ERR, 2, {'SwitchCase': 1}],
    'key-spacing': [ERR, {'beforeColon': false}],
    'no-alert': OFF,
    'no-console': OFF,
    'no-multi-spaces': [ERR],
    'no-multiple-empty-lines': [ERR, {'max': 2}],
    'object-curly-spacing': [ERR, 'never', {'arraysInObjects': false}],
    'prettier/prettier': OFF,
    'quotes': [ERR, 'single'],
    'react/react-in-jsx-scope': OFF,
    'semi': [ERR, 'never'],
    'sort-imports': [OFF],
    'sort-keys': [WRN, 'asc', {'minKeys': 3}],
    'sort-vars': [WRN],
    'space-before-blocks': [ERR, 'always'],
    'space-before-function-paren': [ERR, 'never'],
    'space-in-parens': [ERR, 'never'],
  },
}
