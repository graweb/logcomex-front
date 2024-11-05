<script setup></script>
<template>
    <aside id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar">
        <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
            <ul class="space-y-2 mt-6 font-medium">
                <li>
                    <label for="code" class="block text-sm/6 font-medium text-gray-900">Código</label>
                    <input id="code" name="code" type="text"
                        class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm/6">
                </li>
                <li>
                    <label for="name" class="block text-sm/6 font-medium text-gray-900">Nome</label>
                    <input id="name" name="name" type="text"
                        class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm/6">
                </li>
                <li>
                    <label for="description" class="block text-sm/6 font-medium text-gray-900">Descrição</label>
                    <input id="description" name="description" type="text"
                        class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm/6">
                </li>
                <li>
                    <label for="quantity" class="block text-sm/6 font-medium text-gray-900">Quantidade</label>
                    <input id="quantity" name="quantity" type="text"
                        class="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-lc-purple-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ls-purple-600 sm:text-sm/6">
                </li>
                <li>
                    <button @click="login"
                        class="flex w-full justify-center rounded-md bg-lc-purple-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-lc-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lc-purple-600">Buscar</button>
                </li>
            </ul>
        </div>
    </aside>
</template>