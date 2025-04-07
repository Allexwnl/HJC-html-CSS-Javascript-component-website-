<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>
        <h1>Buttons</h1>
        <h3 class="title">Gradient button with animation</h3>
        <button class="vinacles1" role="button">Button</button>

        <pre><code><p class="subTitle"> HTML</p>
<p class="line">  < button id="button" role="button">Click!< /button ></p> 
</code>
</pre>
        <pre>
<code><p class="subTitle"> CSS</p>
<p class="line">  #button {
      background: #469aff;
      background: linear-gradient(90deg, #469aff 0%, #000032 100%);
      0%, rgba(9, 9, 121, 1) 100%);
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
  }</p></code>
</pre>

        <h3 class="title">Gradient button without animation</h3>
        <button class="vinacles2" role="button">Button</button>
        <pre><code><p class="subTitle"> HTML</p>
<p class="line">  < button class="button" role="button">Button< /button >
    </p></code></pre>

        <pre><code><p class="subTitle"> CSS</p><p class="line">  
  .button {
        background: #469aff;
        background: linear-gradient(90deg, #469aff 0%, #000032 100%);
      color: white;
      display: block;
      width: 170px;
      border-radius: 50px;
      padding: 18px;
      border: 2px solid #FF501A;
      cursor: pointer;
  }

</p></code></pre>
    </main>

</template>

<style scoped>
/*Global CSS*/
.title {
    text-decoration: underline;
}

/*vinacles button with animation*/

.vinacles1 {
    background: #469aff;
    background: linear-gradient(90deg, #469aff 0%, #000032 100%);
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

.vinacles1:hover {
    background-position: right center;
    color: #FF501A;
    text-decoration: none;
    transform: scale(1.1);
}

.vinacles1:active {
    transform: scale(1);
}

/*Vinacles button without animation*/
.vinacles2 {
    background: rgb(0, 212, 255);
    background-image: linear-gradient(90deg, rgba(0, 212, 255, 1) 0%, rgba(9, 9, 121, 1) 100%);
    color: white;
    display: block;
    width: 170px;
    border-radius: 50px;
    padding: 18px;
    border: 2px solid #FF501A;
    cursor: pointer;
}

/*code blocks*/
pre {
    background: #ffffff03;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 700px;
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
</style>