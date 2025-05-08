<script setup>

</script>

<template>
  <header id="navbar_container">
    <nav class="navbar">
      <router-link to="/"><img src="../assets/logo.png" alt=""></router-link>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/documents">Documents</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/*Navbar CSS*/
header { 
  padding: 0;
  margin: 0;
  width: 100%;
  height: 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.navbar {
  background: rgb(28,177,209);
  background: linear-gradient(90deg, rgba(28,177,209,1) 7%, rgba(250,167,40,1) 100%);
  display: flex;
  box-shadow: 0px 0px 5px black;
}

img {
  width: 50px;
  height: 50px;
  position: relative;
  left: 1%;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
}

a {
  text-decoration: none;
  color: white;
  animation: 1s ease-in-out, transform;
}

a:hover {
  transform: scale(1.1);
}
</style>
