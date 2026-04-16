import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://ibcdjutbxjcppwuiuudt.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliY2RqdXRieGpjcHB3dWl1dWR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyODYwOTksImV4cCI6MjA5MTg2MjA5OX0.UE3_VecQCCeTNhL0loGcTd1H4EaZeZCRHO11X5OELko';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
