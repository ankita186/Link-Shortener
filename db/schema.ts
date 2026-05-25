import { integer, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const links = pgTable('links', {
  id: integer('id').generatedAlwaysAsIdentity().primaryKey(),
  userId: text('user_id').notNull(),
  url: text('url').notNull(),
  shortCode: varchar('short_code', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
});

export type InsertLink = typeof links.$inferInsert;
export type SelectLink = typeof links.$inferSelect;
