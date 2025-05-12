import { defineConfig } from '@medusajs/framework/utils'

// ... removed loadEnv comments ...

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  // Add the plugins array here:
  plugins: [
    // ... potentially other plugins like Redis, File Storage, Payment Gateways, etc. ...
    {
      resolve: "@medusajs/admin",
      options: {
        // You might need to add options here depending on your setup,
        // but just including it like this enables the default admin build.
        // For example, if you want to run the admin on a specific port locally:
        // autoRebuild: true,
        // develop: {
        //   port: 7000,
        // },
      },
    },
  ],
})
