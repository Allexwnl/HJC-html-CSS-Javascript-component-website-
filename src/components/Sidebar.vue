<template>
    <section>
        <div>
            <h1>Sidebars</h1>
            <ul>
                <li><router-link to="SideBars">Vinacles</router-link></li>
            </ul>
            <h1 class="">Buttons</h1>
            <ul>
                <li><router-link to="ButtonAnimation">Button animation</router-link></li>
                <li><router-link to="GradientButtons">Gradient Buttons</router-link></li>
                <li><router-link to="FunctionButtons">Function buttons</router-link></li>
            </ul>
            <h1>Tables</h1>
            <ul>
                <li><router-link to="DataTables">DataTables</router-link></li>
            </ul>
        </div>
    </section>
</template>
<style scoped>
/*Sidebar CSS*/
    section {
        background: #1cb1d1;
        background: linear-gradient(90deg, #1cb1d1 7%, #faa728 100%);
        box-shadow: 0px 0px 5px black;
        width: 300px;
        height: 800px;
        border-radius: 8px;
        display: flex;
        position: fixed;
        top: 100px;
        left: 1%;
    }

    a {
        font-weight: bold;
    }

    h1 {
        margin-left: 20px;
        color: white;
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

</style>