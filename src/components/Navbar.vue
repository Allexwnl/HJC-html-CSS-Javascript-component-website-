<script setup>

</script>

<template>
  <header id="navbar_container">
    <nav class="navbar">
      <router-link to="/"><img src="/img/logo.png" alt=""></router-link>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/documents">Documents</router-link></li>
      </ul>
      <ul class="login-register-container">
        <li><router-link to="/login">Login</router-link></li>
        <li>registreer</li>
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
  background: #57C785;
  background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
  display: flex;
  box-shadow: 0px 0px 5px black;
  justify-content: space-between;
}

.login-register-container {
  display: flex;
  gap: 10px;
  margin-right: 2%;
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
