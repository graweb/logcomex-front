<script setup>
import ChartPie from '../components/charts/ChartPie.vue';
import ChartDoughnut from '../components/charts/ChartDoughnut.vue';
import ChartPolarArea from '../components/charts/ChartPolarArea.vue';
import ChartLine from '../components/charts/ChartLine.vue';
import ChartBar from '../components/charts/ChartBar.vue';
//import Details from '../components/Details.vue';
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <label class="block text-sm/6 font-medium text-gray-900 mb-2">Últimos 5 produtos cadastrados por região</label>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
          <ChartPie />
        </div>
        <div class="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
          <ChartPolarArea />
        </div>
        <div class="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
          <ChartDoughnut />
        </div>
      </div>
      <label class="block text-sm/6 font-medium text-gray-900 mb-2">Quantidade atual x mínima dos últimos 12 produtos</label>
      <div class="flex items-center justify-center h-60 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <ChartLine />
      </div>
      <label class="block text-sm/6 font-medium text-gray-900 mb-2">Valor atual x mínimo dos primeiros 12 produtos</label>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <ChartBar />
      </div>
    </div>
  </div>
</template>
