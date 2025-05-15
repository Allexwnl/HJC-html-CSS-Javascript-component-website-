<template>
  <div class="main-container">
    <section class="login-container">
      <div class="return-button-container">
        <router-link class="return-button" to="/">
          <i class="fa-solid fa-arrow-left"></i>
        </router-link>
      </div>

      <div class="form-container">
        <h2>Register</h2>

        <div class="form-group">
          <label for="email">Email</label>
          <input id="email" v-model="email" type="email" placeholder="Voer je email in" />
        </div>

        <div class="form-group">
          <label for="display_name">Gebruikersnaam</label>
          <input id="display_name" v-model="displayName" type="text" placeholder="Kies een gebruikersnaam" />
        </div>

        <div class="form-group">
          <label for="password">Wachtwoord</label>
          <input id="password" v-model="password" type="password" placeholder="Voer je wachtwoord in" />
        </div>

        <div class="button-group">
          <button class="--button-login-register" @click="register">Register</button>
        </div>

        <p v-if="error" class="error-message">{{ error }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '@/Supabase/supabase'
import '@/assets/css/login.css'

const email = ref('')
const password = ref('')
const displayName = ref('')
const error = ref(null)

const register = async () => {
  error.value = null
  if (!email.value || !password.value || !displayName.value) {
    error.value = 'Vul alle velden in.'
    return
  }

  // Maak gebruiker aan en voeg display_name toe aan user_metadata
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        display_name: displayName.value
      }
    }
  })

  if (signUpError) {
    error.value = signUpError.message
    return
  }

  if (profileError) {
    error.value = profileError.message
    return
  }

  error.value = 'Registratie succesvol! Check je email voor bevestiging.'
}
</script>
