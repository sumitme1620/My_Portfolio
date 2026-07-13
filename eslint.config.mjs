import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Global ignores — don't lint build output or dependencies.
  { ignores: [".next/**", "out/**", "build/**", "node_modules/**"] },
  ...compat.extends("next/core-web-vitals"),
];

export default eslintConfig;
