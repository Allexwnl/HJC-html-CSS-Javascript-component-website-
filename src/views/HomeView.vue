<script setup>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import '@/assets/css/btn_styles.css'
import '@/assets/css/home_page.css'
import { supabase } from '@/Supabase/supabase'
import { onMounted, ref, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { setupCopyButtons } from '@/assets/js/copy-button.js';

onMounted(async () => {
    // Wait until the DOM is fully rendered
    await nextTick();
    setupCopyButtons();
});

const user = ref(null)
const router = useRouter()

onMounted(async () => {
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser
})
</script>

<template>
  <Navbar></Navbar>
  <main class="main__container__home">
    <section class="home--container">
      <div class="text-container">
        <h1 class="title--mainpage">HCJ</h1>
        <h2>Alles voor jouw componenten</h2>
        <p>Vind snel en eenvoudig de juiste onderdelen van jouw project.</p>
        <button id="button"><router-link to="/documents">Browse Components</router-link></button>
      </div>
      <div class="video-container">
        <video autoplay loop muted>
          <source src="/video/HCJ.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  </main>
  <div class="home-button-container">
    <section>
      <div class="code-block">
        <div class="code-header">
          <span class="language-label">HTML &lt;head&gt;</span>
          <button class="copy-button" onclick="copyCode(this)">Copy</button>
        </div>
        <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"&gt;
&lt;/head&gt;</code></pre>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="language-label">HTML</span>
          <button class="copy-button" onclick="copyCode(this)">Copy</button>
        </div>
        <pre><code>&lt;button class="button" role="button"&gt;
  &lt;i class="fas fa-bolt"&gt;&lt;/i&gt; Button
&lt;/button&gt;</code></pre>
      </div>
      <div class="code-block">
        <div class="code-header">
          <span class="language-label">CSS</span>
          <button class="copy-button" onclick="copyCode(this)">Copy</button>
        </div>
        <pre><code>.button {
  width: 200px;
  height: 60px;
  background-color: transparent;
  border-radius: 8px;
  border: 2px solid #ff1100;
  box-shadow: 0px 0px 15px red;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  translate: 0px -5px;
  box-shadow: 0px 1px 10px rgb(0, 0, 0, 0.3);
  cursor: pointer;
}</code></pre>
      </div>
    </section>
    <section class="button-explained">
      <h1>Icon button</h1>
      <p>Here’s an example of just one of the many button components we offer. Our buttons aren’t just functional —
        they’re designed to look great and feel intuitive across any type of project. Whether you need a bold
        call-to-action, a subtle link-style button, or something completely custom, we’ve got you covered. Each button
        is built with care, including smooth hover effects, responsive behavior, and clean, reusable code.

        But buttons are only the beginning. Our full component library includes cards, forms, navigation bars, sliders,
        modals, and so much more. Every component is crafted to be flexible and easy to integrate, helping you save time
        while keeping your design polished and consistent. From personal portfolios to large-scale web apps, our
        components are ready to scale with your ideas.

        Don’t just take our word for it — browse through the collection and see for yourself. There’s a world of
        design-ready tools waiting for you!</p>
      <button class="btn-style-3" @click="router.push('/ButtonStyles')" role="button"><i class="fas fa-bolt"></i> Click me</button>
    </section>
  </div>

  <Footer></Footer>
</template>

<style>
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


@media (max-width: 1495px) {
  
  .home-button-container {
    gap: 20px;
  }
  
  .home-button-container section:nth-child(1) {
    order: 2;
  }
  
  .home-button-container section.button-explained {
    order: 1;
  }
  
}

@media (max-width: 1317px) {
.button-explained {
  text-align: center;
}

  .home-button-container {
    margin-top: 100px;
  }
}
@media (max-width: 768px) {
  .home-button-container {
    margin-top: 70px;
  }
  
  .code-block {
    width: 450px;
}

.button-explained p {
    font-size: 0.8rem;
}
}
@media (max-width: 468px) {
    .code-block {
    width: 250px;
}
}
</style>
