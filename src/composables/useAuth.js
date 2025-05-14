// src/composables/useAuth.js
import { supabase } from '@/supabase/supabase'

export const useAuth = () => {
  const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    return { data, error }
  }

  const signIn = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const getUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  }

  return { signUp, signIn, signOut, getUser }
}
