<template>
    <main v-if="isOpen" class="absolute top-0 left-0 z-[9999] w-full h-screen bg-[#0000000f] flex flex-row-reverse" @click="close">
        <div @click.stop class="bg-white w-1/2 h-full p-4 shadow-lg transform transition-all z-[99999] overflow-y-auto"
            :class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Produtos</h2>
                <button @click="close" class="text-xl font-bold">X</button>
            </div>
            <div v-if="products.total > 0">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    CÓDIGO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    NOME DO PRODUTO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    QUANTIDADE
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VALOR
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products.data" :key="product.id" class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ product.code }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ product.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.quantity }}
                                </td>
                                <td class="px-6 py-4">
                                    R$ {{ product.amount }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-else>
                <p>Carregando produtos...</p>
            </div>
        </div>
    </main>
    <!-- <div v-if="isOpen"
        class="absolute inset-0 flex justify-end items-center z-50 opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': isOpen }">
        <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
        <div class="bg-white w-1/2 h-full p-4 shadow-lg transform transition-all"
            :class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Produtos</h2>
                <button @click="close" class="text-xl font-bold">X</button>
            </div>
            <div v-if="products.total > 0">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    CÓDIGO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    NOME DO PRODUTO
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    QUANTIDADE
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    VALOR
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="product in products.data" :key="product.id" class="bg-white border-b hover:bg-gray-50">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {{ product.code }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ product.name }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ product.quantity }}
                                </td>
                                <td class="px-6 py-4">
                                    R$ {{ product.amount }}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div v-else>
                <p>Carregando produtos...</p>
            </div>
        </div>
    </div> -->
</template>

<script>
import { useProductsStore } from '../stores/products';

export default {
    data() {
        return {
            isOpen: false,
        };
    },
    computed: {
        products() {
            const store = useProductsStore();
            return store.products;
        },
    },
    methods: {
        open(filters) {
            this.isOpen = true;
            this.fetchProducts(filters);
        },
        close() {
            this.isOpen = false;
        },
        filterProducts(filters) {
            this.fetchProducts(filters);
        },
        fetchProducts(filters) {
            const store = useProductsStore();
            store.fetchProducts(filters);
        },
    },
};
</script>

<style scoped></style>