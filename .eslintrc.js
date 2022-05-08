module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': 'off',
        'no-trailing-spaces': 'off',
        quotes: 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'react-native/no-inline-styles': 'off',
        'treact/self-closing-comp': 'off',
        curly: 'off',
        'react/react-in-jsx-scope': 'off',
        'treact-hooks/exhaustive-deps': 'off',
        radix: 'off',
      },
    },
  ],
};
