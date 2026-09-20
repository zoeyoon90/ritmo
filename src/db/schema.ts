import {
  pgEnum,
  pgTable,
  uuid,
  text,
  timestamp,
  boolean,
  smallint,
} from 'drizzle-orm/pg-core';

// Enum
export const roleEnum = pgEnum('role', ['user', 'admin']);

// Profiles
export const profiles = pgTable('profiles', {
  id: uuid('id').primaryKey(),
  nickname: text('nickname').notNull(),
  avatarUrl: text('avatar_url'),
  role: roleEnum('role').default('user').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

//Routines
export const routines = pgTable('routines', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id')
    .references(() => profiles.id, { onDelete: 'cascade' })
    .notNull(),
  title: text('title').notNull(),
  emoji: text('emoji').default('🔥').notNull(),
  color: text('color').default('#39FF14').notNull(),
  days: smallint('days').array().notNull(),
  archived: boolean('archived').default(false).notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

//Completions
export const completions = pgTable('completions', {
  id: uuid('id').defaultRandom().primaryKey(),
  routineId: uuid('routine_id')
    .references(() => routines.id, { onDelete: 'cascade' })
    .notNull(),
  completedAt: timestamp('completed_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});

//push_subscriptions
export const pushSubscriptions = pgTable('push_subscriptions', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: uuid('user_id')
    .references(() => profiles.id, { onDelete: 'cascade' })
    .notNull(),
  endpoint: text('endpoint').notNull(),
  p256dh: text('p256dh').notNull(),
  auth: text('auth').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
});
