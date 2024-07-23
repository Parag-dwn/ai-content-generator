/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: "postgresql://Ai-form-builder_owner:8vMpEAfL1KJr@ep-crimson-mountain-a1gvf2pj.ap-southeast-1.aws.neon.tech/AI-content-generator?sslmode=require",
    }
  };