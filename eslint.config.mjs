import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'

export default tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', '**/*.config.*', 'test/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier,
  {
    rules: {
      // The wire format mirrors backend JSON; index signatures with `any`
      // (e.g. IExtras) are an intentional, repo-wide pattern.
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
)
