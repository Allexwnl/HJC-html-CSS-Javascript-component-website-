<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
  <Navbar></Navbar>
  <main class="main__container__home">
    <section class="home__img__container">
      <video id="home__video" src="../assets/home__Menu__img.mp4" autoplay muted></video>
      <button id="button"><router-link to="/documents">Browse Components</router-link></button>
    </section>
    <section id="about_us">
      <img src="../assets/homeimg2.png" alt="home_img_2">
      <div class="text__container">
        <h1>What do we provide </h1>
        <p>At HJC, we specialize in providing high-quality, pre-built HTML, CSS, and JavaScript components
          that are designed to save you valuable time and effort. Instead of spending hours searching for solutions,
          debugging, or trying to figure out how things work, our components offer you the perfect foundation to build
          faster and smarter.</p>
      </div>
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

/*code blocks*/
pre {
  background: #ffffff03;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 700px;
}

pre>.copy-button {
  position: absolute;
  right: 10px;
  top: 5px;
  background-color: #1cb1d1;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

.subTitle {
  background-color: #ececec;
  color: #1cb1d1;
  margin: 0;
  padding: 1%;
  border-radius: 8px 8px 0px 0px;
}

.line {
  width: 640px;
  display: flex;
  flex-direction: row;
  background-color: rgba(255, 255, 255, 0.01);
  color: #1cb1d1;
  margin-left: 1%;
  margin: 0;
}

.copy-button {
  background-color: transparent;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}

/*css*/
.home__img__container {
  position: relative;
  object-fit: fill;
  z-index: 0;
  border-bottom: 3px #1cb1d1;
}

#home__video {
  width: 100%;
  object-fit: fill;
  z-index: -1;
}

img[alt="home_img_2"] {
  width: 30%;
  height: 100%;
  object-fit: cover;
}

.website__name {
  position: absolute;
  top: 40%;
  left: 4%;
  font-size: 60px;

}

#button {
  background: linear-gradient(90deg, #14809a 0%, #f89d25 100%);
  color: white;
  position: absolute;
  top: 80%;
  left: 50%;
  transform-origin: center center;
  width: 50%;
  max-width: 300px;
  text-align: center;
  border-radius: 50px;
  padding: 18px;
  border: 2px solid #FF501A;
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0.5s, background-position 0.5s;
  background-size: 200% auto;
  touch-action: manipulation;
  cursor: pointer;
  pointer-events: auto;
  z-index: 1;
}

#button:hover {
  background-position: right center;
  color: white;
  text-decoration: none;
  transform: translate(-50%, -50%) scale(1.1);
}

#about_us {
  width: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#about_us>h1,
#about_us>p {
  margin-right: 10%;
  width: 30%;
}

.text__container {
  display: flex;
  flex-direction: column;
  width: 500px;
}
</style>
