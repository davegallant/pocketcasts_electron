module.exports = {
 env: {
     browser: true,
     node: true,
     es6: true
 },
 extends: [
  'plugin:@angular-eslint/recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:@typescript-eslint/recommended-requiring-type-checking',
  'prettier',
  'prettier/@typescript-eslint'
 ],
 parser: '@typescript-eslint/parser',
 parserOptions: {
        project: 'tsconfig.eslint.json,
        sourceType: 'module'
 },
 plugins: [
        '@typescript-eslint',
        '@typescript-eslint/tslint'
 ],
 rules: {
  '@angular-eslint/directive-selector': ['error', { type:   'attribute', prefix: 'ourprefix', style: 'camelCase'}],
  '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'ourcomponent', style: 'cebab-case'}]
 }
};
