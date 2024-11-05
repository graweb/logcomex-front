<script setup lang="ts">
// Core
import { RouterView } from 'vue-router';
// Stores
import { useAuthStore } from "./stores/auth";

const authStore = useAuthStore();

authStore.init();
</script>
<template>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="route.meta.layout">
        <component :is="Component" />
      </component>
    </keep-alive>
  </router-view>
</template>

<style scoped>
</style>
