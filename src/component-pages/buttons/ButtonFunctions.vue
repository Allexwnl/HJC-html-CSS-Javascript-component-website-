<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
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
    </main>
</template>
<style scoped>
h1,
h2,
h3,
h4,
h5,
p {
  color: white;
}
</style>