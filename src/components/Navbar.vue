<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '@/Supabase/supabase'
import { onMounted, ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const user = ref(null)
const router = useRouter()
const { signOut } = useAuth()

onMounted(async () => {
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser
})

const logout = async () => {
  const { error } = await signOut()
  if (!error) {
    user.value = null
    router.push('/login')  // of een andere pagina na logout
  } else {
    console.error('Logout failed:', error.message)
  }
}
</script>

<template>
  <header id="navbar_container">
    <nav class="navbar">
      <router-link to="/"><img src="/img/logo.png" alt="logo"></router-link>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/documents">Documents</router-link></li>
        <li v-if="user" class="--user-info"><router-link to="/suggestions">Suggesties</router-link></li>
      </ul>
      <ul class="login-register-container">
        <li v-if="!user"><router-link to="/login">Login</router-link></li>
        <li v-if="!user"><router-link to="/register">Register</router-link></li>
        <li v-if="user" class="--user-info">
          <router-link to="/login" @click.prevent="logout" class="logout-link">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/*Navbar CSS*/
header {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.navbar {
  background: #57C785;
  background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
  display: flex;
  box-shadow: 0px 0px 5px black;
  justify-content: space-between;
}

.login-register-container {
  display: flex;
  gap: 10px;
  margin-right: 2%;
}

img {
  width: 50px;
  height: 50px;
  position: relative;
  left: 1%;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

.--user-info {
  display: flex;
  gap: 10px;
}

a {
  text-decoration: none;
  color: white;
  animation: 1s ease-in-out, transform;
}

a:hover {
  transform: scale(1.1);
}
</style>
