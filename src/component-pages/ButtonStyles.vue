<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/css/btn_styles.css';
import { onMounted, nextTick } from 'vue';
import { setupCopyButtons } from '@/assets/js/copy-button.js';

onMounted(async () => {
    // Wait until the DOM is fully rendered
    await nextTick();
    setupCopyButtons();
});
</script>

<template>
    <Navbar></Navbar>
    <Sidebar></Sidebar>
    <main>
      <h3 class="title">Gradient button without animation</h3>

<h5>Rounded button</h5>
<button class="btn-style-1" role="button">Button</button>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">HTML</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>&lt;button class="button" role="button"&gt;Button&lt;/button&gt;</code></pre>
</div>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">CSS</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>.button {
  width: 200px;
  height: 60px;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid #color;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.button:active {
  transform: scale(1);
}</code></pre>
</div>
<h5>Glow button</h5>
<button class="btn-style-2" role="button">Button</button>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">HTML</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>&lt;button class="button" role="button"&gt;Button&lt;/button&gt;</code></pre>
</div>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">CSS</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>.button {
  width: 200px;
  height: 60px;
  background-color: transparent;
  border-radius: 30px;
  border: 2px solid #ff1100;
  box-shadow: 0px 0px 15px red;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
  cursor: pointer;
}</code></pre>
</div>
<h5>Most used button</h5>
<button class="btn-style-3" role="button">Button</button>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">HTML</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>&lt;button class="button" role="button"&gt;Button&lt;/button&gt;</code></pre>
</div>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">CSS</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>.button {
  width: 200px;
  height: 60px;
  background-color: turquoise;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
}

.button:hover {
  translate: 0px -5px;
  box-shadow: 0px 1px 10px rgb(0, 0, 0, 0.3);
  cursor: pointer;
}</code></pre>
</div>
<h5>Icon button</h5>
<button class="btn-style-3" role="button"><i class="fas fa-bolt"></i> Button</button>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">HTML &lt;head&gt;</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"&gt;
&lt;/head&gt;</code></pre>
</div>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">HTML</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>&lt;button class="button" role="button"&gt;
  &lt;i class="fas fa-bolt"&gt;&lt;/i&gt; Button
&lt;/button&gt;</code></pre>
</div>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">CSS</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>.button {
    width: 200px;
    height: 60px;
    background-color: turquoise;
    border-radius: 8px;
    border: none;
    transition: all 0.3s ease-in-out;
}

.button:hover {
  translate: 0px -5px;
  box-shadow: 0px 1px 10px rgb(0, 0, 0, 0.3);
  cursor: pointer;
}</code></pre>
</div>
<section id="icon-libary" class="icon-libary-explained">
        <h1>icon libary</h1>
        <p>This component uses Font Awesome 6.4.0 via CDN to provide a rich set of scalable vector icons. Font Awesome
            includes thousands of icons across categories like user interface, social media, and application controls.
        </p>
        <p>We include the stylesheet from the official CDN:</p>
        
        <p>&lt;link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"&gt;</p>
        <p>You can explore the full icon library and find the right icon for your use case at:</p>
        <p>👉<a href="https://fontawesome.com/icons"
                style="color: black; text-decoration: underline;">https://fontawesome.com/icons</a></p>

        <p>To use an icon, simply include the appropriate class in your HTML:</p>

        <p>&lt;i class="fa-solid fa-user"&gt;&lt/i&gt;</p>
        Font Awesome supports multiple styles:
        <ul>
            <li>fa-solid – solid icons</li>
            <li>fa-regular – regular outline icons</li>
            <li>fa-brands – brand and logo icons</li>
        </ul>
        
    <p>
      <strong>License:</strong><br />
      Font Awesome Free is available under the
      <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" style="color: black;">Creative Commons Attribution 4.0 License</a>
      and the
      <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" style="color: black;">MIT License</a>.<br />
      See the <a href="https://fontawesome.com/license/free" target="_blank" rel="noopener noreferrer" style="color: black;">official license page</a> for more details.
    </p>
</section>

<h5>Icon Rotation button</h5>
<span class="btn-style-4">
  <button role="button">Button</button>
  <i class="fa-solid fa-arrow-right"></i>
</span>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">HTML</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>&lt;span class="btn-container"&gt;
  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
  &lt;i class="fa-solid fa-arrow-right"&gt;&lt;/i&gt;
&lt;/span&gt;</code></pre>
</div>
<div class="code-block">
  <div class="code-header">
    <span class="language-label">CSS</span>
    <button class="copy-button" onclick="copyCode(this)">Copy</button>
  </div>
  <pre><code>.btn-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  height: 60px;
  background-color: turquoise;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease-in-out;
}

.btn-container:hover {
  translate: 0px -5px;
  box-shadow: 0px 1px 10px rgb(0, 0, 0, 0.3);
  cursor: pointer;
}

.btn-container i {
  transition: all 0.3s ease-in-out;
}

.button {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-container:hover i {
  rotate: -45deg;
}</code></pre>
</div>
    </main>
</template>