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
