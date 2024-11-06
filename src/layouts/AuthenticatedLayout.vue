<script setup>
// Components
import { ref } from 'vue';
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';

const toogleSidebar = ref(false);
</script>

<template>
    <main class="h-screen w-full flex flex-col">
        <Header v-model="toogleSidebar" />
        <section class="flex h-full w-full overflow-auto">
            <Sidebar v-model="toogleSidebar" />
            <section class="flex flex-col w-full p-4 h-full overflow-y-auto">
                <slot />
            </section>
        </section>
    </main>
</template>

<style scoped></style>
