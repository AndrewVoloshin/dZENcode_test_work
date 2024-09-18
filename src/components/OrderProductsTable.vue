<script setup lang="ts">
import { ref, computed } from 'vue';
import { useOrderStore } from '@/stores/orderStore';

const orderStore = useOrderStore();


const allProductOrderId = computed(() => orderStore.products.filter(product => {
    if (product.order === orderStore.choosenOrder) return true
}))


</script>

<template>
    <div class="product"
         v-if="orderStore.displayOrderProductTable">

        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ducimus ratione debitis. Optio saepe
            sapiente eaque enim mollitia tempora. Numquam!</h2>
        <button>Add product</button>

        <table :class="['table']">
            <tbody>


                <tr v-for="(product, index) in allProductOrderId"
                    :key="product.id">

                    <td>
                        <div>
                            {{ product.title }}
                        </div>
                        <span>{{ product.type }} </span>
                    </td>




                    <td>

                    </td>

                    <td>
                        <span class="d-block text-center">
                            {{ }}
                        </span>
                        <span class="d-block text-center">
                            {{ }}
                        </span>
                    </td>
                    <td>
                        <button class="delete-btn">
                            <i class="fa-regular fa-trash-can"
                               style="color: #636d73;"></i>
                        </button>
                    </td>

                    <td class="ss">
                        <div class="cell-chevron__container">
                            <img src="/src/assets/chevron-right-solid.svg"
                                 alt="chevron" />
                        </div>
                    </td>
                </tr>



            </tbody>
        </table>
    </div>
</template>

<style lang="scss" scoped>
.product {
    background: white;
    border: 1px solid #ddd;
}

.table {
    width: 100%;
    border-spacing: 0 10px;

    tr {
        background: white;
    }
}

.table-small {
    width: 410px;
}

.table td {
    border: 1px solid #f5f4f4;
    padding: 8px;
    text-align: left;
    border-left: none;
    border-right: none;
    vertical-align: middle;

    &:first-child {
        border-left: none;
    }

    &:last-child {
        border-right: none;
    }
}


.table td {
    border-bottom: none;
}




.icon-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 1px solid #ddd;
    color: #636d73;
}

.cell-chevron {
    background-color: #d0d8db;
    text-align: center;
}

.cell-chevron__container {
    position: relative;
    width: 12px;
    height: 12px;
    margin: 0 auto;

    & img {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
    }
}
</style>