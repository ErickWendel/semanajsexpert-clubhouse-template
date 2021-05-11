module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
  },
};
