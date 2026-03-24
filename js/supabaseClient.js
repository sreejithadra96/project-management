const SUPABASE_URL = "https://qzpesrgomdzopribdcmp.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6cGVzcmdvbWR6b3ByaWJkY21wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIxNTAzMzUsImV4cCI6MjA3NzcyNjMzNX0.27INrKOblIko8OhEOxbQE0_jrWRosziUKV-TbSYkmKY"

const supabaseClient = supabase.createClient(
   SUPABASE_URL,
   SUPABASE_KEY
);
