import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://jhwobqaeeowcxqfurkbr.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impod29icWFlZW93Y3hxZnVya2JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODgzMDE3ODgsImV4cCI6MjAwMzg3Nzc4OH0.IrnE9Ap6quFc06cfPC5YpWV_-YjQKKDIT7Tblbro-DY"

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
