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
            <div class="code-block">
                <div class="code-header">
                    <span class="language-label">html</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code>&lt;button class="button" role="button"&gt;Button&lt;/button&gt;</code></pre>
            </div>
            <div class="code-block">
                <div class="code-header">
                    <span class="language-label">CSS</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code>.button:hover {
  transform: scale(1.1);
}</code></pre>
            </div>

            <h5>transform and with transition</h5>
            <button role="button" class="example--button button--transform-2">button</button>
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
  transition: transform 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
}</code></pre>
            </div>

            <h5>transform transition and active effect</h5>
            <button role="button" class="example--button button--transform-3">button</button>
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
  transition: transform 0.3s ease-in-out;
}

.button:hover {
  transform: scale(1.1);
}

.button:active {
  transform: scale(1);
}</code></pre>
            </div>
        </section>

        <section>
            <h3 id="hover-animations">hover effects</h3>

            <h5>simple color hover</h5>
            <button role="button" class="example--button button--hover-1"><span>button</span></button>
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
                <pre><code>.button:hover {
  background-color: color;
}</code></pre>
            </div>

            <h5>Rotate hover</h5>
            <button role="button" class="example--button button--hover-2"><span>button</span></button>
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
  transition: transform 0.3s ease-in-out;
}

.button:hover {
  background-color: #faa728;
  transform: rotate(5deg);
}</code></pre>
            </div>

            <h5>translate -Y hover</h5>
            <button role="button" class="example--button button--hover-3"><span>button</span></button>
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
  transition: transform 0.3s ease-in-out;
}

.button:hover {
  background-color: #faa728;
  transform: translateY(-5px);
}</code></pre>
            </div>

            <h5>translate Y&X hover</h5>
            <button role="button" class="example--button button--hover-4"><span>button</span></button>
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
  transition: transform 0.3s ease-in-out;
}

.button:hover {
  background-color: #faa728;
  transform: translateY(5px) translateX(-10px);
}</code></pre>
            </div>
        </section>

        <section>
            <h3 id="active-animations">Active effects</h3>
            <h5>active</h5>
            <button role="button" class="example--button button--active-1"><span>button</span></button>
            <div class="code-block">
                <div class="code-header">
                    <span class="language-label">HTML</span>
                    <button class="copy-button" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code class="language-html">
&lt;button class="button" role="button"&gt;Button&lt;/button&gt;
    </code></pre>
            </div>
        </section>
    </main>

</template>