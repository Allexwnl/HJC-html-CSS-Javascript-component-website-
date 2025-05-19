<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '@/Supabase/supabase'
import { onMounted, ref, watch } from 'vue'
import { useAuth } from '@/composables/useAuth'

const user = ref(null)
const router = useRouter()
const { signOut } = useAuth()
const dropdownOpen = ref(false)
const sidebarView = ref('main') // 'main' of 'components'
const animate = ref(false)

function toggleDropdown() {
  dropdownOpen.value = !dropdownOpen.value
  sidebarView.value = 'main'  // als dropdown toggled reset naar main
}

function goToComponents() {
  sidebarView.value = 'components'
}

function goBack() {
  sidebarView.value = 'main'
}

// Reset en trigger animatie telkens als dropdown opent of sidebarView verandert
watch([dropdownOpen, sidebarView], ([open, view]) => {
  if (open) {
    animate.value = false
    setTimeout(() => {
      animate.value = true
    }, 10) // kleine delay om animatie opnieuw te triggeren
  } else {
    animate.value = false
  }
})

onMounted(async () => {
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser
})

const logout = async () => {
  const { error } = await signOut()
  if (!error) {
    user.value = null
    router.push('/login')
  } else {
    console.error('Logout failed:', error.message)
  }
}
</script>

<template>
  <header id="navbar_container">
    <nav class="desktop-navbar">
      <div class="logo-container">
        <router-link to="/"><img src="/img/logo.png" alt="logo" /></router-link>
      </div>

      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/documents">Documents</router-link></li>
        <li v-if="user"><router-link to="/suggestions">Suggesties</router-link></li>
      </ul>
      <ul class="login-register-container">
        <li v-if="!user"><router-link to="/login">Login</router-link></li>
        <li v-if="!user"><router-link to="/register">Register</router-link></li>
        <li v-if="user" class="--user-info">
          <p>{{ user.user_metadata.display_name }}</p>
          <router-link to="/login" @click.prevent="logout" class="logout-link">Logout</router-link>
        </li>
      </ul>
    </nav>
  </header>

  <header class="mobile-navbar-container">
    <nav class="mobile-navbar">
      <div class="logo-container">
        <router-link to="/"><img src="/img/logo.png" alt="logo" /></router-link>
      </div>

      <ul class="nav">
        <li v-if="!user"><router-link to="/login">Login</router-link></li>
        <li v-if="!user"><router-link to="/register">Register</router-link></li>
        <li v-if="user">
          <button class="dropdown-toggle" @click="toggleDropdown">
            {{ user.user_metadata.display_name }}
            <i class="hamburger-icon fa-solid fa-bars"></i>
          </button>
        </li>
      </ul>
    </nav>

    <nav class="nav-dropdown-container">
      <li v-if="user" class="nav-dropdown">
        <ul
          v-if="dropdownOpen"
          class="dropdown-menu"
          :class="{ 'slide-in': animate }"
        >
          <!-- Hoofdmenu -->
          <template v-if="sidebarView === 'main'">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/documents">Documents</router-link></li>
            <li><router-link to="/suggestions">Suggesties</router-link></li>
            <li><button id="component-button" @click="goToComponents">Componenten</button></li>
            <li><a href="#" @click.prevent="logout">Logout</a></li>
          </template>

          <!-- Submenu: Componenten -->
          <template v-else-if="sidebarView === 'components'">
            <li><button @click="goBack">← Terug</button></li>
            <h1>Sidebars</h1>
            <ul>
                <li><router-link to="SideBars">Vinacles</router-link></li>
            </ul>
            <h1 class="">Buttons</h1>
            <ul>
                <li><router-link to="ButtonStyles">Button styles</router-link></li>
                <li><router-link to="ButtonAnimation">Button animation</router-link></li>
                <li><router-link to="GradientButtons">Gradient Buttons</router-link></li>
                <li><router-link to="FunctionButtons">Function buttons</router-link></li>
            </ul>
            <h1>Tables</h1>
            <ul>
                <li><router-link to="DataTables">DataTables</router-link></li>
            </ul>
            <h1>Cards</h1>
            <ul>
                <li><router-link to="ImageCards">Image cards</router-link></li>
            </ul>
          </template>
        </ul>
      </li>
    </nav>
  </header>
</template>

<style scoped>
/*Navbar CSS*/
a {
  text-decoration: none;
  color: white;
}

#component-button {
  padding: 0;
}

.navbar_container {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 20px;
  position: fixed;
  top: 0;
  left: 0;
}

.desktop-navbar {
  background: #57c785;
  background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
  display: flex;
  box-shadow: 0px 0px 5px black;
  justify-content: space-between;
  height: 70px;
}

.mobile-navbar-container {
  display: none;
}

.login-register-container {
  display: flex;
  gap: 10px;
  margin-right: 2%;
}

img {
  width: 50px;
  height: 50px;
}

.logo-container {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

li {
  list-style: none;
}

.--user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

/* Animatie via class slide-in */
.dropdown-menu.slide-in {
  animation: slideInFromLeft 0.3s ease forwards;
}

@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

/* Mobile styles */
@media (max-width: 768px) {
  #navbar_container {
    display: none;
  }

  .mobile-navbar-container {
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .mobile-navbar {
    width: 100%;
    height: 100%;
    background: #57c785;
    background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
    display: flex;
    box-shadow: 0px 0px 5px black;
    justify-content: space-between;
    height: 70px;
    z-index: 2;
  }

  .nav {
    margin-right: 20px;
    z-index: 2;
  }

  .dropdown-toggle {
    background: none;
    border: none;
    color: white;
    font-size: 40px;
    cursor: pointer;
  }

  .nav-dropdown {
    transition: all 0.3s ease;
  }

  .dropdown-menu {
    position: fixed;
    left: 0;
    width: 60%;
    height: 100%;
    background: linear-gradient(to right, #327d65, #2a6c9f);
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 10px 20px;
    padding-top: 80px;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }

  .dropdown-menu li,
  .dropdown-menu button {
    color: white;
    font-size: 16px;
    margin-bottom: 10px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
  }

  .dropdown-menu li a {
    color: white;
  }
}
</style>
