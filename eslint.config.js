import { FlatCompat } from "@eslint/eslintrc";
import eslintSimpleImportSort from "eslint-plugin-simple-import-sort";
import eslintTailwindCss from "eslint-plugin-tailwindcss";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...eslintTailwindCss.configs["flat/recommended"],
  {
    plugins: {
      "simple-import-sort": eslintSimpleImportSort,
      tailwindcss: eslintTailwindCss,
    },
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
