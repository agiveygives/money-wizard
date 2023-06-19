import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || 'http://localhost:5734';
const supabaseKey = process.env.SUPABASE_KEY || 'supabase-key';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
