import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
import { authTables } from "@convex-dev/auth/server";

export default defineSchema({
  ...authTables,
  services: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.optional(v.string()),
    bookingUrl: v.optional(v.string()),
    order: v.optional(v.number()),
  }),
  reviews: defineTable({
    author: v.string(),
    content: v.string(),
    rating: v.number(),
    date: v.optional(v.string()),
  }),
  serviceAreas: defineTable({
    name: v.string(),
  }),
  siteSettings: defineTable({
    key: v.string(),
    value: v.any(),
  }).index("by_key", ["key"]),
});
