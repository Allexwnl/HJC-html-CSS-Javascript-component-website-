<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>
        <h1>Button animations</h1>
        <h3>Transform button animations</h3>
        <h5>only transform</h5>
        <button role="button" class="button--transform-1">button</button>
    </main>
</template>
<style scoped>
button {
    width: 200px;
    border: none;
    border-radius: 8px;
    padding: 10px;
    background-color: #1cb1d1;
    color: white;
    cursor: pointer;
}

.button--transform-1:hover {
    transform: scale(1.1);
}
</style>