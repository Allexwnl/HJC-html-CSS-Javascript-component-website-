<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>
        <h1>Vinacles sidebars</h1>
        <header>
            <nav class="navcbar__container">
                <img class="Vinacles__logo" src="../assets/Vinacles_FC_Kleur.jpg" alt="vinalces logo">
                <ul class="router-link__container">
                    <li><router-link to="#">Dashboard</router-link> </li>
                    <li><router-link to="#">Orders</router-link> </li>
                    <li><router-link to="#">Te fractueren</router-link> </li>
                    <li><router-link to="#">Api-gebruikers</router-link> </li>
                    <li><router-link to="#">Dashboardgebruikers</router-link> </li>
                    <li><router-link to="#">Klanten</router-link> </li>
                    <li><router-link to="#">Betalingen</router-link> </li>
                    <li><router-link to="#">Prijsaanvragen</router-link> </li>
                    <li><router-link to="#">Uitgegeven groene kaarten</router-link> </li>
                    <li><router-link to="#">FRISS</router-link> </li>
                    <li><router-link to="#">VTG documenten</router-link> </li>
                    <li><router-link to="#">APK marketing PDF</router-link> </li>
                    <li class="uitloggen"><router-link to="#">uitloggen</router-link> </li>
                </ul>
            </nav>
        </header>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
</script>

<style scoped>
/* Vinacles sidebar design 1 */
nav {
    /*remove the /* when you copied the style/*
    /*position: fixed;
    left: 3%;*/
    min-width: 200px;
    width: 300px;
    height: 70vh;
    background-color: white;
    border-radius: 15px;
    box-shadow: 3px 3px 8px #FF501A;
}

.Vinacles__logo {
    width: 200px;
    padding: 15px;

}

ul {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

a {
    display: flex;
   color: #FF501A; 
   text-decoration: underline;
}

.uitloggen {
    margin-top: 10%;
}
</style>