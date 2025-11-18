import { betterAuth } from "better-auth";
import { Pool } from "pg";
import { genericOAuth } from "better-auth/plugins";

export const auth = betterAuth({
  database: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  }),
  emailAndPassword: {
    enabled: false,
  },
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "notoverkill",
          clientId: process.env.CLIENT_ID!,
          clientSecret: process.env.CLIENT_SECRET!,
          discoveryUrl: process.env.DISCOVERY_URL!,
          scopes: [
            "openid",
            "email",
            "profile",
            "goauthentik.io/api",
            "offline_access",
          ],
          accessType: "offline",
        },
      ],
    }),
  ],
});
