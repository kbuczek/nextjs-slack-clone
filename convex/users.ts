import { auth } from './auth';
import { query } from './_generated/server';
import { getAuthUserId } from '@convex-dev/auth/server';

// handler - controller that has access to db
export const current = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return null;
    }
    return await ctx.db.get(userId);
  },
});
