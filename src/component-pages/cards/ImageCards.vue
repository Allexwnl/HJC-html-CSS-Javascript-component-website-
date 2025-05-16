<template>
    <main>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <section>
            <h1>Image Cards</h1>
            <h3>Image Cards</h3>
            <p>Image cards are a great way to display images with text and links. They can be used for product listings,
                portfolios, or any other type of content that requires an image and some text.</p>
            <div>

                <div class="card--1"> <a class="card--link" href="#">
                        <div class="card--1-container">
                            <div class="card--1-inner-container">
                                <img src="/img/card-example.png" alt="">
                            </div>
                            <div class="card--1-text">
                                <h3>Card title</h3>
                                <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                                    incididunt
                                    ut
                                    labore
                                    et dolore magna aliqua.</b>
                                <button><i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="code-block">
                    <div class="code-header">
                        <span class="language-label">HTML</span>
                        <button class="copy-button" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><code class="language-html">&lt;div class=&quot;card--1&quot;&gt;
  &lt;a class=&quot;card--link&quot; href=&quot;#&quot;&gt;
    &lt;div class=&quot;card--1-container&quot;&gt;
      &lt;div class=&quot;card--1-inner-container&quot;&gt;
        &lt;img src=&quot;/img/card-example.png&quot; alt=&quot;&quot;&gt;
      &lt;/div&gt;
      &lt;div class=&quot;card--1-text&quot;&gt;
        &lt;h3&gt;Card title&lt;/h3&gt;
        &lt;b&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.&lt;/b&gt;
        &lt;button&gt;&lt;i class=&quot;fa-solid fa-arrow-right&quot;&gt;&lt;/i&gt;&lt;/button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/a&gt;
&lt;/div&gt;
    </code></pre>
                </div>
                <div class="code-block">
                    <div class="code-header">
                        <span class="language-label">CSS</span>
                        <button class="copy-button" onclick="copyCode(this)">Copy</button>
                    </div>
                    <pre><code>.card--1 {
    width: 400px;
    height: 500px;
    border-radius: 10px 10px 10px 10px;
    border: none;
    overflow: hidden;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
    cursor: pointer;

}

.card--1:hover {
    transform: scale(1.02);
    cursor: pointer;
}

.card--1-container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: black;
}

.card--1 img {
    width: 100%;
    height: 50%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
}

.card--1-text {
    height: 50%;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    color: black;
    padding-left: 10px;
}

.card--1-text button {
    display: flex;
    justify-content: end;
    align-items: end;
    font-size: 30px;
    padding-right: 30px;
    width: 100%;
    height: 100px;
    background-color: transparent;
    border: none;
    cursor: pointer;
}</code></pre>
                </div>
            </div>

        </section>
    </main>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import '@/assets/css/image_cards.css';

</script>