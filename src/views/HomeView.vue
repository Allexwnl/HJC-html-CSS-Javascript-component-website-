<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import { supabase } from '@/Supabase/supabase'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
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
  <Navbar></Navbar>
  <main class="main__container__home">
    <section class="home--container">
      <div>
        <h1 class="title--mainpage">HCJ</h1>
        <h2>Alles voor jouw componenten</h2>
        <p>Vind snel en eenvoudig de juiste onderdelen van jouw project.</p>
        <button id="button"><router-link to="/documents">Browse Components</router-link></button>
      </div>
      <div class="video-container">
        <video src="/public/video/home-video.mp4" autoplay muted></video>
      </div>
    </section>
    <section id="about_us">
    </section>
  </main>
  <div>
    <p v-if="user">Welkom, {{ user.email }}</p>
    <p v-else>Niet ingelogd</p>
    <button v-if="user" @click="logout" class="logout-button">Logout</button>
  </div>
  <Footer></Footer>
</template>

<style>
/*Global CSS*/
.main__container__home {
  width: 100%;
  margin: 0%;
  margin-top: 100px;
  padding: 0%;
  display: block;
  position: relative;
  left: 0;
}

.title--mainpage {
  font-size: 80px;
  margin: 0;
}

h2 {
  font-size: 40px;
}

h3 {
  font-size: 20px;
}

h4 {
  font-size: 20px;
}

h5 {
  font-size: 15px;
}

h1,
h3,
h4,
h5,
h6,
p {
  color: white;
}

/*code blocks*/
.code-block {
  background-color: #0f172a;
  width: 640px;
  border-radius: 12px;
  margin-top: 30px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  font-family: 'Fira Code', monospace;
}

.code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  color: #94a3b8;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  backdrop-filter: blur(4px);
}

.copy-button {
  background: #14b8a6;
  color: white;
  border: none;
  padding: 0.25rem 0.6rem;
  font-size: 0.75rem;
  border-radius: 6px;
  cursor: pointer;
}

.copy-button:hover {
  background: #0d9488;
}

pre {
  margin: 0;
  padding: 1rem;
  color: #e2e8f0;
  font-size: 0.9rem;
}

/*css*/
.home--container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 30px;
}

.video-container video {
  margin-right: 30px;
  border-radius: 12px;
  width: 900px;
}

#button {
  background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
  color: white;
  position: absolute;
  top: 80%;
  left: 180px;
  transform-origin: center center;
  width: 50%;
  max-width: 300px;
  text-align: center;
  border-radius: 50px;
  padding: 18px;
  border: 2px solid #FF501A;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.5s, background-position 0.5s;
  background-size: 200% auto;
  touch-action: manipulation;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1;
}

#button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
  transform: translate(-50%, -50%) scale(1.1);
}

#button:active {
  transform: translate(-50%, -50%) scale(1);
}
</style>
