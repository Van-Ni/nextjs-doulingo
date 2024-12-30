import "dotenv/config";
import type { Config } from "drizzle-kit";

// doulingo dizzle: https://orm.drizzle.team/docs/drizzle-config-file
export default {
  schema: "./db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
