import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

// Appointment / booking requests submitted through the public booking form.
// These are *requests* only — the clinic team reviews and confirms manually,
// since 2Care does not expose a real-time scheduling system to the public.
export const appointmentRequests = pgTable("appointment_requests", {
  id: serial("id").primaryKey(),
  fullName: varchar("full_name", { length: 160 }).notNull(),
  phoneCountryCode: varchar("phone_country_code", { length: 8 })
    .notNull()
    .default("+966"),
  phone: varchar("phone", { length: 32 }).notNull(),
  email: varchar("email", { length: 160 }),
  department: varchar("department", { length: 40 }).notNull(),
  service: varchar("service", { length: 80 }).notNull(),
  doctor: varchar("doctor", { length: 80 }),
  preferredDate: varchar("preferred_date", { length: 10 }).notNull(),
  preferredTime: varchar("preferred_time", { length: 40 }),
  notes: text("notes"),
  privacyAccepted: boolean("privacy_accepted").notNull().default(false),
  status: varchar("status", { length: 20 }).notNull().default("pending"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type AppointmentRequestRow = typeof appointmentRequests.$inferSelect;
export type NewAppointmentRequestRow = typeof appointmentRequests.$inferInsert;
