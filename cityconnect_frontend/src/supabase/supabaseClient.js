import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kwznqztqlvkeoxjzlhkm.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3em5xenRxbHZrZW94anpsaGttIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwNzIzMzMsImV4cCI6MjA2NTY0ODMzM30.4SBDmL0SuVsGqQeubAKjVH0lXX5JInlM-f5vg4gFHsk';
export const supabase = createClient(supabaseUrl, supabaseKey);

/*
  Supabase schema notes:
  - Auth table: stores primary user auth.
  - Table: user_profiles
    - id (UUID, PK) references Auth user id
    - role: "citizen" | "authority"
    - Add more fields as needed.
  - Table: complaints
    - id (PK), user_id (references user_profiles.id), description, status, timestamps, etc.

  Example queries:
  - Write complaint:
      await supabase.from("complaints").insert({ user_id, description, ... });
  - Fetch for dashboard:
      await supabase.from("complaints").select("*");
  - Fetch my reports:
      await supabase.from("complaints").select("*").eq("user_id", user.id);
*/
