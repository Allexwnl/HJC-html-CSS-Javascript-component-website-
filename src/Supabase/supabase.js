// src/supabase.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ervmrgisyydwktpqxmpz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVydm1yZ2lzeXlkd2t0cHF4bXB6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMDI3OTgsImV4cCI6MjA2Mjc3ODc5OH0.GI7QvkoCYqlbJPmUdKXvfLTUG3YvNsjS7M2rqPWmS20' // uit je Supabase project settings

export const supabase = createClient(supabaseUrl, supabaseKey)
