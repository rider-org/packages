// @ts-expect-error - TS keeps complaining here. Might be a bug with their default export, but this works for now, so ignoring to pass tests.
import sj from "superjson";

/** JSON with superjson capabilities.
 * @example
 * ```ts
 * return res.send(
    SJ.stringify({
      hello: "world",
      user: res.locals.user,
      session: res.locals.session,
      thisFails: res.locals.thisFails,
      timestamp: new Date(),
    })
  );
 * ```
 */
export const s = {
  stringify(data: unknown) {
    return sj.stringify(data);
  },

  parse<T = unknown>(data: string) {
    return sj.parse<T>(data);
  },
};
