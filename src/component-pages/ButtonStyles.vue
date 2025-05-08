<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/css/btn_styles.css';
import { onMounted, nextTick } from 'vue';
import { setupCopyButtons } from '@/assets/js/copy-button.js';

onMounted(async () => {
    // Wait until the DOM is fully rendered
    await nextTick();
    setupCopyButtons();
});

</script>

<template>
<Navbar></Navbar>
<Sidebar></Sidebar>
<main>
    <h3 class="title">Gradient button without animation</h3>
        <button class="btn-style-1" role="button">Button</button>
        <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  < button class="button" role="button">Button< /button >
    </p></code></pre>

         <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">  
  .button {
    width: 200px;
    height: 60px;
    background-color: transparent;
    border-radius: 30px;
    border: 2px solid #color;
    transition: all 0.3s ease-in-out;
  }

  .button:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  .button:active {
    transform: scale(1);
  }

</p></code></pre>
</main>
</template>