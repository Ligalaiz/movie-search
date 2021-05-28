module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'default-case': 'off',
    'no-useless-return': 'off',
    'no-unused-vars': 'off',
    'arrow-body-style': 'off',
    'import/no-duplicates': 'off',
    'no-shadow': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-nested-ternary': 'off',
    'no-else-return': 'off',
    'no-console': 'off',
  },
};
