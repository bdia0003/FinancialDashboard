import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lxmgodusqsxxezdsiwbk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bWdvZHVzcXN4eGV6ZHNpd2JrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4Mzc0NTgsImV4cCI6MjA0NzQxMzQ1OH0.MtXA7rrzuDEUfpQQmRmBbqEuENsFAo_o4f-y-yaI4g4';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
