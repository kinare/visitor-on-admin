/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
