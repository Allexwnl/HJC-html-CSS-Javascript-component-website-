<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
    <Navbar></Navbar>
    <main>

    </main>
</template>
<style scoped>
.table__container {
    width: 60%;
}
td, th {
    border-bottom: 3px solid #FF501A;
}

td {
    display: flex;
    flex-direction:row;
    gap: 10px
    ;
}
</style>