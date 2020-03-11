module.exports = {
  env: {
    "browser": true,
    "es6": true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
        jsx: true
    }
},
  globals: {
    __PATH_PREFIX__: true,
  },
  plugins: ["react", "prettier"],
  extends: [
    'airbnb',
    'prettier',
  ],
  rules: {
    "prettier/prettier": "error",
    'import/no-extraneous-dependencies': 'off',
  }
}
