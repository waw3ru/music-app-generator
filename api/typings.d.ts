declare module 'bun' {
  interface Env {
    SUPABASE_SERVICE_ROLE: string;
    SUPABASE_PROJECT_URL: string;
    SUPABASE_PROJECT_ID: string;
    CLIENT_URL: string;
    PORT: string;
  }
}
