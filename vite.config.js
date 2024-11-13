import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// Load environment variables from the appropriate .env file
const env = dotenv.config({ path: `.env` }).parsed;

console.log(env);
// https://vitejs.dev/config/
export default defineConfig({
  define: {
    // Pass environment variables to your Vite app
    "import.meta.env.SUPABASE_URL": JSON.stringify(env.SUPABASE_URL),
    "import.meta.env.SUPABASE_KEY": JSON.stringify(env.SUPABASE_KEY),
  },
  plugins: [react()],
});
