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
    <section id="about_us">
      <h1>What do we provide </h1>
      <p>At HJC, we specialize in providing high-quality, pre-built HTML, CSS, and JavaScript components
        that are designed to save you valuable time and effort. Instead of spending hours searching for solutions,
        debugging, or trying to figure out how things work, our components offer you the perfect foundation to build
        faster and smarter.</p>
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

h1,
p {
  color: #0b3867;
}

pre {
  background-color: #e5e5e5;
  border: 1px solid #dadada;
}

/*css*/
.home__img__container {
  object-fit: fill;
  z-index: -1;
}

#home__img {
  width: 100%;
  object-fit: fill;
}



.website__name {
  position: absolute;
  top: 40%;
  left: 4%;
  font-size: 60px;

}

#button {
  background: linear-gradient(90deg, #14809a 0%, #f89d25 100% 0%, #f89d25 100%);
  color: white;
  display: block;
  position: absolute;
  top: 70%;
  left: 40%;
  width: 20%;
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

#about_us {
  width: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
}

#about_us>h1,
#about_us>p {
  margin-right: 10%;
  width: 30%;
}
</style>
