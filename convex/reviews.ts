import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("reviews").collect();
  },
});

export const add = mutation({
  args: {
    author: v.string(),
    content: v.string(),
    rating: v.number(),
    date: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("reviews", args);
  },
});

export const update = mutation({
  args: {
    id: v.id("reviews"),
    author: v.string(),
    content: v.string(),
    rating: v.number(),
    date: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...data } = args;
    await ctx.db.patch(id, data);
  },
});

export const remove = mutation({
  args: { id: v.id("reviews") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});
