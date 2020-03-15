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
  ],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
  }
}
