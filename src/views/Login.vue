<script setup>
import { reactive } from 'vue';
import { useAuthStore } from '../stores/auth';
import Input from '../components/Input.vue';

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
                <Input id="email" name="email" type="email" v-model="fields.email" label="E-mail"
                    placeholder="Digite seu e-mail" />

                <Input id="password" name="password" type="password" v-model="fields.password" label="Senha"
                    placeholder="Digite sua senha" />
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