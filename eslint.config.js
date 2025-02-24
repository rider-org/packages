import tseslint from "typescript-eslint";

import config from "./eslint/index.js";

export default tseslint.config(config, {});
