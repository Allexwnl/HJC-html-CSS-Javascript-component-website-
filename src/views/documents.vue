<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>
        <h1>How does this work?</h1>
        <p>In the sidebar, you will find a series of organized tabs, each containing a wide variety of components such
            as buttons, navigation bars, and many other user interface elements. Each tab is designed to showcase the
            functionality and styling of these components; you can interact with them—for example, by clicking on a
            button to observe its behavior in real time.

            In addition, code snippets for each component are provided, allowing you to easily copy and integrate these
            elements into your projects. Currently, while a dedicated copy-code button is not available, you can
            manually copy the code from the provided code blocks.

            Please note that this page is optimized exclusively for desktop usage. As most development activities are
            performed on desktop devices, this interface is not designed to be mobile-first.
        </p>
        
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
<style>
/* global styling*/
main {
    width: 50%;
    font-size: 18px;
}
</style>
