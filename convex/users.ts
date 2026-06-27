import { mutation } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const deleteAccount = mutation({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId) {
      await ctx.db.delete(userId);
    }
  },
});
