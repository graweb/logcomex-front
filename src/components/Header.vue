<script setup>
import { useAuthStore } from '../stores/auth';
import Logout from '../assets/icons/Logout.vue';
import Showsidebar from '../assets/icons/Showsidebar.vue';

const authStore = useAuthStore()

async function logout() {
  await authStore.logout();
}
</script>

<template>
    <nav class="sticky top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar"
                        aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                        <span class="sr-only">Abrir</span>
                        <Showsidebar />
                    </button>
                    <img src="https://pbs.twimg.com/media/Ff_r69mWYAIBetN?format=png&name=4096x4096" class="h-16" alt="Logcomex" />
                </div>
                <div class="flex items-center">
                    <button class="bg-red-500 hover:bg-red-700 text-white text-sm font-bold py-2 px-4 rounded-full" @click="logout">
                        <Logout />
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>