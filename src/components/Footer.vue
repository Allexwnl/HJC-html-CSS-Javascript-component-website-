<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <h2>HCJ</h2>
                <p>© {{ new Date().getFullYear() }} HCJ. All rights reserved.</p>
                <p class="footer-license">
                    Icons by <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer">Font
                        Awesome</a>,
                    licensed under <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank"
                        rel="noopener noreferrer">CC BY 4.0</a>.
                </p>
            </div>
            <div class="footer-icons">
                <a href="https://fontawesome.com/" target="_blank" rel="noopener noreferrer" title="Font Awesome">
                    <i class="fa-brands fa-font-awesome"></i>
                </a>
                <a href="https://github.com/Allexwnl/HJC-html-CSS-Javascript-component-website-" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <i class="fa-brands fa-github"></i>
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
h1,
h2,
h3,
h4,
h5,
p {
  color: white;
}

.footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background: #57C785;
    background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
    text-align: center;
    box-shadow: 0px 0px 5px black;
    padding-bottom: 20px;
}

.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 20px;
}

h2 {
    color: white;
    font-size: 24px;
    margin-top: 20px;
    margin-bottom: 20px;
}

a {
    color: black;
    text-decoration: underline;
}
</style>