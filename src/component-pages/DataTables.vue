<script setup>
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';

function toggleDetails(event) {
    const button = event.target;
    const row = button.closest('tr');
    const nextRow = row.nextElementSibling;

    if (nextRow && nextRow.classList.contains('details-row')) {
        nextRow.style.display = nextRow.style.display === 'none' ? 'table-row' : 'none';
    }
}
</script>

<template>
    <Navbar />
    <Sidebar />
    <main>
        <section id="tables">
            <h1>DataTables</h1>
            <h3>DataTables</h3>
            <p>
                DataTables is a plug-in for the jQuery Javascript library. It is a highly
                flexible tool, based upon the foundations of progressive enhancement, that adds
                advanced interaction controls to any HTML table.
            </p>
            <div class="table__container">
                <table class="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Hallo</td>
                            <td>Test</td>
                            <td>Developer</td>
                            <td>Amsterdam</td>
                            <td>28</td>
                            <td>2023-01-01</td>
                            <td>€60,000</td>
                            <td><button @click="toggleDetails">Details</button></td>
                        </tr>
                    <tbody class="details-row" style="display: none;">
                        <tr>
                            <td>naam</td>
                            <td>achternaam</td>
                            <td>functie</td>
                        </tr>
                    </tbody>
                    </tbody>
                </table>
            </div>
        </section>
    </main>
</template>

<style scoped>
.table__container {
    width: 100%;
}

td,
th {
    border-bottom: 3px solid #FF501A;
}
</style>
