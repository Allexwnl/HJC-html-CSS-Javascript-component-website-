<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/css/btn_animations.css';
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
    <nav class="on-this-page-sidebar-btnanimation">
        <h1>on this page</h1>
        <ul>
            <li><a href="#transform-animations">Transform animations</a></li>
            <li><a href="#hover-animations">Hover animations</a></li>
            <li><a href="#active-animations">Active animations</a></li>
        </ul>
    </nav>
    <main>
        <section>
            <h1>Button animations</h1>
            <h3 id="transform-animations">Transform button animations</h3>
            <h5>only transform</h5>
            <button role="button" class="example--button button--transform-1">button</button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">  
 .button:hover {
        transform: scale(1.1);
 }

</p></code></pre>
            <h5>transform and with transition</h5>
            <button role="button" class="example--button button--transform-2">button</button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button {
    transition: transform 0.3s ease-in-out;
 }
            
 .button:hover {
        transform: scale(1.1);
 }

</p></code></pre>
            <h5>transform transition and active effect</h5>
            <button role="button" class="example--button button--transform-3">button</button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button {
    transition: transform 0.3s ease-in-out;
 }
            
 .button:hover {
        transform: scale(1.1);
 }

 .button:active {
        transform: scale(1);
 }

</p></code></pre>
        </section>
        <section>
            <h3 id="hover-animations">hover effects</h3>
            <h5>simple color hover</h5>
            <button role="button" class="example--button button--hover-1"><span>button</span></button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button:hover {
    background-color: color;
 }

</p></code></pre>
            <h5>Rotate hover</h5>
            <button role="button" class="example--button button--hover-2"><span>button</span></button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button {
    transition: transform 0.3s ease-in-out;
 }

 .button:hover {
    background-color: #faa728;
    transform: rotate(5deg);
 }

</p></code></pre>
            <h5>translate -Y hover</h5>
            <button role="button" class="example--button button--hover-3"><span>button</span></button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button {
    transition: transform 0.3s ease-in-out;
 }

 .button:hover {
    background-color: #faa728;
    transform: translateY(-5px);
 }

</p></code></pre>
            <h5>translate Y&X hover</h5>
            <button role="button" class="example--button button--hover-4"><span>button</span></button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button {
    transition: transform 0.3s ease-in-out;
 }

 .button:hover {
    background-color: #faa728;
    transform: translateY(5px) translateX(-10px);
 }

</p></code></pre>
        </section>
        <section>
            <h3 id="active-animations">Active effects</h3>
            <h5>active</h5>
            <button role="button" class="example--button button--active-1"><span>button</span></button>
            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> HTML</p>
<p class="line">  &lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </p></code></pre>

            <pre><button class="copy-button">Copy</button><code><p class="subTitle"> CSS</p><p class="line">
 .button:active {
    background-color: #faa728;
 }

</p></code></pre>
        </section>

    </main>

</template>