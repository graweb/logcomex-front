<script setup>
// Components
import Header from '../components/Header.vue';
import Sidebar from '../components/Sidebar.vue';
</script>

<template>
    <Header />
    <Sidebar />
    <slot></slot>
</template>

<style scoped></style>
