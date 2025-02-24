import config from "@rider/packages/eslint/index.mjs";
import tseslint from "typescript-eslint";

export default tseslint.config(config, {});
