<script setup>
import { reactive, ref, toRaw } from 'vue';
import Input from '../components/Input.vue';
import Details from '../components/Details.vue';
import { toast } from '../components/toast/Toast.ts';

const fields = reactive({
    code: null,
    name: null,
    description: null,
    quantity: null,
});

// Referência para o modal
const modal = ref(null);

// Função para abrir o modal
function openModal() {
    const filledFieldsCount = Object.values(fields).filter(value => value !== null).length;

    if (!filledFieldsCount) {
        toast('warning', 'Preencha apenas um campo para fazer a busca');
        return;
    }

    modal.value.open(toRaw(fields));
}
</script>

<template>
    <Details ref="modal" @filterData="filterProducts" />
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white">
            <ul class="space-y-2 mt-6 font-medium">
                <li>
                    <Input id="code" name="code" type="text" v-model="fields.code" label="Código"
                        placeholder="Digite o código" />
                </li>
                <li>
                    <Input id="name" name="name" type="text" v-model="fields.name" label="Nome do produto"
                        placeholder="Digite o nome" />
                </li>
                <li>
                    <Input id="description" name="description" type="text" v-model="fields.description"
                        label="Descrição" placeholder="Digite a descrição" />
                </li>
                <li>
                    <Input id="quantity" name="quantity" type="text" v-model="fields.quantity"
                        label="Quantidade (maior ou igual)" placeholder="Digite a quantidade" />
                </li>
            </ul>
            <ul class="space-y-2 mt-6">
                <li>
                    <button @click="openModal"
                        class="flex w-full justify-center rounded-md bg-lc-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-lc-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lc-purple-600">Buscar</button>
                </li>
            </ul>
        </div>
    </aside>
</template>
