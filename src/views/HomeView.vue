<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar></Navbar>
  <main class="main__container__home">
    <section class="home__img__container">
      <video id="home__img" src="../assets/home__Menu__img.mp4" autoplay muted></video>
      <button id="button"><router-link to="/documents">Browse Components</router-link></button>
    </section>
  </main>
</template>

<style> 

/*Global CSS*/
.main__container__home {
  width: 100%;
  margin: 0%;
  padding: 0%;
  display: block;
  position: relative;
  left: 0;
}

.home__img__container {
  object-fit: fill;
  z-index: -1;
}

#home__img {
  width: 100%;
  object-fit: fill;

}

.website__name {
  position:absolute;
  top: 40%;
  left: 4%;
  font-size: 60px;

}

#button {
      background: linear-gradient(90deg, #469aff 0%, #000032 100% 0%, rgba(9, 9, 121, 1) 100%);
      color: white;
      display: block;
      width: 170px;
      border-radius: 50px;
      padding: 18px;
      border: 2px solid #FF501A;
      transition: 0.5s;
      background-size: 200% auto;
      touch-action: manipulation;
      cursor: pointer;
  }
  
  #button:hover {
      background-position: right center;
      color: white;
      text-decoration: none;
      transform: scale(1.1);
  }
  
  #button:active {
      transform: scale(1);
  }

</style>
