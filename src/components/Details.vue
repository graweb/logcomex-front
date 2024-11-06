<template>
    <div v-if="isOpen"
        class="fixed inset-0 flex justify-end items-center z-50 opacity-0 transition-opacity duration-300"
        :class="{ 'opacity-100': isOpen }">
        <div class="fixed inset-0 bg-black opacity-50" @click="close"></div>
        <div class="bg-white w-1/2 h-full p-4 shadow-lg transform transition-all"
            :class="{ 'translate-x-full': !isOpen, 'translate-x-0': isOpen }">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-lg font-semibold">Produtos</h2>
                <button @click="close" class="text-xl font-bold">X</button>
            </div>
            <div v-if="products.total > 0">
                <table class="w-full table-auto">
                    <thead>
                        <tr>
                            <th class="px-4 py-2">ID</th>
                            <th class="px-4 py-2">Nome</th>
                            <th class="px-4 py-2">Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="product in products.data" :key="product.id">
                            <td class="px-4 py-2">{{ product.id }}</td>
                            <td class="px-4 py-2">{{ product.name }}</td>
                            <td class="px-4 py-2">R$ {{ product.amount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div v-else>
                <p>Carregando produtos...</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useProductsStore } from '../stores/products';

export default {
    data() {
        return {
            isOpen: false,
            filters: {},
        };
    },
    computed: {
        products() {
            const store = useProductsStore();
            return store.products;
        },
    },
    methods: {
        open() {
            this.isOpen = true;
            this.fetchProducts(this.filters);
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