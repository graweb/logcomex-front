<script setup>
import { useAuthStore } from '../stores/auth';
import Logout from '../assets/icons/Logout.vue';
import Showsidebar from '../assets/icons/Showsidebar.vue';

const authStore = useAuthStore();
const toogleSidebar = defineModel();

async function logout() {
  await authStore.logout();
}

function toggleSideBar() {
    toogleSidebar.value = !toogleSidebar.value;
}
</script>

<template>
    <header class="w-full h-fit max-h-[88px] bg-white border-b border-gray-200">
        <div class="px-3 py-3 lg:px-5 lg:pl-3">
            <div class="flex items-center justify-between">
                <div class="flex items-center justify-start rtl:justify-end">
                    <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" @click="toggleSideBar"
                        aria-controls="logo-sidebar" type="button"
                        class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
                        <span class="sr-only">Abrir</span>
                        <Showsidebar />
                    </button>
                    <img src="https://pbs.twimg.com/media/Ff_r69mWYAIBetN?format=png&name=4096x4096" class="h-16" alt="Logcomex" />
                </div>
                <div class="flex items-center">
                    <button class="bg-orange-500 hover:bg-orange-700 text-white text-sm font-bold py-2 px-4 rounded-full" @click="logout">
                        <Logout />
                    </button>
                </div>
            </div>
        </div>
    </header>
</template>