import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("serviceAreas").collect();
  },
});

export const add = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db.insert("serviceAreas", args);
  },
});

export const remove = mutation({
  args: { id: v.id("serviceAreas") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
