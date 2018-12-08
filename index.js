module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  globals: {
    process: false
  },
  rules: {
    'quotes': ['error', 'single'],
    'no-unused-vars': ['error', { 'args': 'none' }],
    'comma-dangle': ['error', 'never'],
    'object-curly-spacing': ['error', 'never'],
    'max-len': ['error', { 'code': 119 }],
    'no-param-reassign': ['error', { 'props': false }],
    'no-unused-expressions': ['error', { 'allowShortCircuit': true, 'allowTernary': true }],

    // Vue
    'vue/script-indent': ['warn', 2, { 'baseIndent': 1, 'switchCase': 1 }],
    'vue/order-in-components': [
      'warn', {
        'order': [
          'el',
          'name',
          'parent',
          'functional',
          'inheritAttrs',
          'model',
          'extends',
          'mixins',
          ['props', 'propsData'],
          'data',
          'computed',
          'methods',
          'watch',
          'LIFECYCLE_HOOKS',
          ['components', 'directives', 'filters'],
          ['delimiters', 'comments'],
          ['template', 'render'],
          'renderError'
        ]
      }
    ],

    // off
    'no-new': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/singleline-html-element-content-newline': 'off'
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off'
      }
    },
    {
      files: ['*.js'],
      rules: {
        'vue/script-indent': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.vue'
        ]
      }
    }
  }
};
