import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"


export default [
  {
    files: ["**/*.{mjs,cjs,ts}"],
  },
  {
    ignores: ["**/*.js"], // добавлено игнорирование js-файлов
  },
  { languageOptions: { globals: globals.browser } },
  {
    rules:
    {
      semi: ["error", "never"],
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]