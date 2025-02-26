import js from "@eslint/js";
import stylisticJs from "@stylistic/eslint-plugin-js";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    plugins: {
      perfectionist,
    },
    rules: {
      "perfectionist/sort-imports": "error",
    },
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      stylisticJs.rules,
    ],
    rules: {
      "consistent-type-imports": "error",
      "max-len": [
        "error",
        {
          code: 150,
          comments: 100,
        },
      ],
    },
    files: ["**/*.ts"],
  },
);
