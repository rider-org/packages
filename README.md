# rider-org/packages

A collection of core packages reused across the Rider ecosystem

### Installation

In order to use this package, run this command inside of the root directory of your application:

```bash
pnpm i rider-org/packages
```

### Update

If you need to receive an update for this package specifically, you can just run the same command again:

```bash
pnpm i rider-org/packages
```

### Development

You must follow the rules of semver to push changes to this repository. What does that mean? (Keep in mind, X is the value you should change)

If the change is a patch (e.g., bug fix or small improvement that does not affect the API): update the version like so - X.Y.Z → X.Y.(Z+1).
If the change introduces new, backward-compatible functionality: update the version like so - X.Y.Z → X.(Y+1).0.
If the change introduces backward-incompatible modifications (a breaking change): update the version like so - (X.Y.Z → (X+1).0.0).

    When you make commits, include the version update in the title like so:

```bash
git commit -am "[1.3.0 -> 1.4.1] Updated Superjson export" -m "Add your description here..."
```

### Package info

1. **ESLint:**

   - ESLint is a requirement inside of the Rider ecosystem.
   - There are two exports you can use for your ESLint configuration:
     1. **React** (for `.ts` & `.tsx` files) - You do not need the Typescript export if you already have the React one in your codebase
        - The import is `@rider/packages/eslint/react/index.js`
     2. **TypeScript** (for `.ts` files)
        - The import is `@rider/packages/index.js`
   - Here is an example of how to attach the config to your `eslint.config.js` file:

     ```js
     import config from "@rider/packages/eslint/index.js";
     import tseslint from "typescript-eslint";

     export default tseslint.config(config, {});
     ```

2. Prettier:

   - Prettier is a requirement inside of the Rider ecosystem.
   - `@rider/packages/prettier/index.js` is the export location.
   - Here is how you can import it into your `.prettierrc` file:

     ```.prettierrc
     "@rider/packages/prettier/index.js"
     ```

3. Superjson:

   - Superjson is a requirement inside of the Rider ecosystem.
   - `@rider/packages/superjson` exports an object with one key, `s`.
   - You can use the `s` object to `stringify` and `parse`
   - Superjson can parse regular JSON as well, so you can use it as a drop in replacement.
   - Here is an example of how to use it to parse a `fetch` request:

     ```ts
     import { s } from "@rider/packages/superjson";

     const res = await apiFetch("/api/contact/v1/all");

     const json = s.parse(await res.text()) as ApiDefault<{
       contacts: Contact[];
     }>;

     console.log(json);
     ```

4. Attempt

   - Attempt is a requirement of the Rider ecosystem.
   - `@rider/packages/attempt` exports an object with one key, `attempt`.
   - You can pass any promise to attempt, and attempt will then return a promise back.
   - If you await the promise, you get an array with a size of 2: `[value, error]`.
   - Now, you can handle errors as a value and do any early returns or side effects if needed.
   - Here is an example of how to use it:

     ```ts
     const [parserError, parser] = await attempt(
       loginSchema.safeParseAsync(req.body),
     );

     // console.log(req.body);

     if (parserError || !parser.success) {
       return;
     }

     console.log(parser == undefined); // Outputs false
     // The item is now guaranteed to be typed, and errors are handled accordingly.
     ```
