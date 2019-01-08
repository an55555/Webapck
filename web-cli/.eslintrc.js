module.exports = {
  root: true,
  // 解决：Adjacent JSX elements must be wrapped in an enclosing tag
  // parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb-base',
  globals: {
    __static: true
  },
  plugins: [
    'html'
  ],
  rules: {
    'global-require': 0,
    'import/no-unresolved': 0,
    'no-param-reassign': 0,
    'no-shadow': 0,
    'import/extensions': 0,
    'import/newline-after-import': 0,
    'no-multi-assign': 0,
    'semi': 0,
    'comma-dangle': 0,
    'linebreak-style': 0,
    'no-console': 0,
    'keyword-spacing': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'space-before-blocks': 0,
    'import/no-webpack-loader-syntax': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
