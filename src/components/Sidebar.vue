<template>
    <aside>
        <div>
            <h1>Sidebars</h1>
            <ul>
                <li><router-link to="SideBars">Vinacles</router-link></li>
            </ul>
            <h1 class="">Buttons</h1>
            <ul>
                <li><router-link to="ButtonStyles">Button styles</router-link></li>
                <li><router-link to="ButtonAnimation">Button animation</router-link></li>
                <li><router-link to="GradientButtons">Gradient Buttons</router-link></li>
                <li><router-link to="FunctionButtons">Function buttons</router-link></li>
            </ul>
            <h1>Tables</h1>
            <ul>
                <li><router-link to="DataTables">DataTables</router-link></li>
            </ul>
            <h1>Cards</h1>
            <ul>
                <li><router-link to="ImageCards">Image cards</router-link></li>
            </ul>
        </div>
    </aside>


</template>
<style scoped>
/*Sidebar CSS*/
    aside {
        background: #57C785;
        background: linear-gradient(90deg, #57c785 0%, #2a7b9b 100%);
        box-shadow: 0px 0px 5px black;
        width: 300px;
        height: 85dvh;
        border-radius: 8px;
        display: flex;
        position: fixed;
        top: 100px;
        left: 1%;
    }

    a {
        color: white;
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

    @media (max-width: 768px) {
        aside {
            display: none;
        }
    }
</style>