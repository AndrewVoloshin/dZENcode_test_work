<script setup lang="ts">
import { ref } from 'vue';

const people = ref([
    { name: 'John Doe', age: 28, city: 'New York' },
    { name: 'Jane Smith', age: 34, city: 'Los Angeles' },
    { name: 'Bob Johnson', age: 23, city: 'Chicago' },
    { name: 'Alice Brown', age: 41, city: 'Houston' },
]);
</script>
<template>


    <div class=" w-10 h-10 ">
        <table class="table">
            <tbody>
                <tr v-for="(person, index) in people"
                    :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                    <td>{{ person.city }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 10px;

    tr {
        background: white;
    }
}

.table td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    border-left: none;
    border-right: none;

    &:first-child {
        border-left: 1px solid #ddd;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    &:last-child {
        border-right: 1px solid #ddd;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
}
</style>
