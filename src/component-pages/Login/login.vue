<template>
  <div class="main-container">
<section class="login-container">
  <div class="return-button-container">
    <router-link class="return-button" to="/">
      <i class="fa-solid fa-arrow-left"></i>
    </router-link>
  </div>

  <div class="form-container">
    <h2>Login</h2>

    <div class="form-group">
      <label for="email">Email</label>
      <input id="email" v-model="email" type="email" placeholder="Voer je email in" />
    </div>

    <div class="form-group">
      <label for="password">Wachtwoord</label>
      <input id="password" v-model="password" type="password" placeholder="Voer je wachtwoord in" />
    </div>

    <div class="button-group">
      <button class="--button-login-register" @click="login" to="/">Login</button>
    </div>

    <p v-if="error" class="error-message">{{ error }}</p>
  </div>
</section>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import '@/assets/css/login.css';

const email = ref('')
const password = ref('')
const error = ref(null)

const { signIn, signUp } = useAuth()

const login = async () => {
  const { error: loginError } = await signIn(email.value, password.value)
  error.value = loginError?.message || null
}

const register = async () => {
  const { error: regError } = await signUp(email.value, password.value)
  error.value = regError?.message || 'Check je email voor bevestiging.'
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}
</style>