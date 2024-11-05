<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '../stores/auth';

const authStore = useAuthStore()

const fields = reactive({
  email: "user@logcomex.com.br",
  password: "password",
})

async function login() {
  await authStore.login(fields.email, fields.password);
}
</script>

<template>
    <div class="flex min-h-screen items-center justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm bg-white p-6 rounded-lg shadow-md">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img src="https://www.riverwoodcapital.com/wp-content/uploads/2024/01/logcomex-logo-website.png"
                    alt="Logcomex" class="w-[400px] h-[100px] rounded-r-2xl md:block object-cover" />
            </div>

            <div class="space-y-4">
                <div>
                    <label for="email" class="block text-sm/6 font-medium text-gray-900">E-mail</label>
                    <div class="mt-2">
                        <input id="email" name="email" type="email" v-model="fields.email"
                            class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm/6">
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label for="password" class="block text-sm/6 font-medium text-gray-900">Senha</label>
                    </div>
                    <div class="mt-2">
                        <input id="password" name="password" type="password" v-model="fields.password"
                            autocomplete="current-password"
                            class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm/6">
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <button @click="login"
                    class="flex w-full justify-center rounded-md bg-lc-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-lc-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lc-purple-600">Entrar</button>
            </div>

            <p class="mt-8 text-center text-sm/6 text-gray-500">
                Não tem acesso?
                <a href="#" class="font-semibold text-lc-purple-600 hover:text-lc-purple-500">cadastre-se aqui</a>
            </p>
        </div>
    </div>
</template>