<script setup>
import { useRouter } from 'vue-router'
import { supabase } from '@/Supabase/supabase'
import { onMounted, ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const user = ref(null)
const router = useRouter()
const { signOut } = useAuth()
const dropdownOpen = ref(false)

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value
}

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
        <nav class="desktop-navbar">
            <div class="logo-container">
                <router-link to="/"><img src="/img/logo.png" alt="logo"></router-link>
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
                <!-- Niet-ingelogde gebruikers -->
                <li v-if="!user"><router-link to="/login">Login</router-link></li>
                <li v-if="!user"><router-link to="/register">Register</router-link></li>
                <li v-if="user">
                    <button class="dropdown-toggle" @click="toggleDropdown">
                        {{ user.user_metadata.display_name }}
                        <i class="hamburger-icon fa-solid fa-bars"></i>
                    </button>
                </li>
                <!-- Ingelogde gebruikers met dropdown -->
            </ul>
        </nav>
        <nav class="nav-dropdown-container">
            <li v-if="user" class="nav-dropdown">
                <ul v-if="dropdownOpen" class="dropdown-menu">
                    <li><router-link to="/">Home</router-link></li>
                    <li><router-link to="/documents">Documents</router-link></li>
                    <li><router-link to="/suggestions">Suggesties</router-link></li>
                    <li><a href="#" @click.prevent="logout">Logout</a></li>
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
    background: #57C785;
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
        background: #57C785;
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
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, #327d65, #2a6c9f);
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
        padding-top: 80px;
        padding-left: 40px;
        z-index: 0;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
    }

}
</style>
