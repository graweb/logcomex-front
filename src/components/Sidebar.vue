<script setup>
import { reactive, ref } from 'vue';
import Input from '../components/Input.vue';
import Details from '../components/Details.vue';
import { toast } from '../components/toast/Toast.ts';

const fields = reactive({
    code: null,
    name: null,
    description: null,
    quantity: null,
});

const modal = ref(null);
const toogleSidebar = defineModel();

function openModal() {
    const filledFieldsCount = Object.values(fields).filter(value => value).length;

    if (!filledFieldsCount) {
        toast('warning', 'Preencha apenas um campo para fazer a busca');
        return;
    }

    modal.value.open(fields);
}
</script>

<template>
    <Details ref="modal" @filterData="filterProducts" />
    <aside 
        id="logo-sidebar"
        :class="{
            'hidden': !toogleSidebar,
            'block absolute': toogleSidebar
        }"
        class="w-full top-0 left-0 max-w-64 sm:block h-full transition-transform bg-white border-r border-gray-200"
        aria-label="Sidebar"
    >
        <div class="h-full px-3 py-4 overflow-y-auto bg-white flex flex-col gap-3">
            <button @click="toogleSidebar = false" class="sm:hidden self-end text-xl font-bold">X</button>

            <Input id="code" name="code" type="text" v-model="fields.code" label="Código"
                placeholder="Digite o código" />
        
            <Input id="name" name="name" type="text" v-model="fields.name" label="Nome do produto"
                placeholder="Digite o nome" />
        
            <Input id="description" name="description" type="text" v-model="fields.description"
                label="Descrição" placeholder="Digite a descrição" />
        
            <Input id="quantity" name="quantity" type="text" v-model="fields.quantity"
                label="Quantidade (maior ou igual)" placeholder="Digite a quantidade" />
        
            <button @click="openModal"
                class="flex w-full justify-center rounded-md bg-lc-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-lc-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lc-purple-600">Buscar</button>
        </div>
    </aside>
</template>
