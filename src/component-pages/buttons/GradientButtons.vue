<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import { onMounted, nextTick } from 'vue';
import { setupCopyButtons } from '@/assets/js/copy-button.js';

onMounted(async () => {
  // Wait until the DOM is fully rendered
  await nextTick();
  setupCopyButtons(); // Calls your imported function
});

onMounted(() => {
  document.querySelectorAll('.copy-button').forEach(button => {
    button.addEventListener('click', () => {
      const codeElement = button.nextElementSibling; // assumes code is next
      const line = codeElement?.querySelector('.line');

      if (!line) {
        console.error('No .line element found.');
        return;
      }

      const codeText = line.innerText.trim();

      navigator.clipboard.writeText(codeText).then(() => {
        button.innerText = 'Copied!';
        setTimeout(() => {
          button.innerText = 'Copy';
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  });
});


</script>



<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>
        <h1>Buttons</h1>
        <h3 class="title">Gradient button with animation</h3>
        <button class="vinacles1" role="button">Button</button>

        <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML </p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;</p></code>
</pre>
        <pre>
<button class="copy-button">Copy</button><code><p class="subTitle"> CSS </p>
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
        <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

         <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">  
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
h1,
h2,
h3,
h4,
h5,
p {
  color: white;
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

</style>