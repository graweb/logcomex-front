<script setup>
import ChartRounded from '../components/charts/ChartRounded.vue';
import ChartPolarArea from '../components/charts/ChartPolarArea.vue';
import ChartLine from '../components/charts/ChartLine.vue';
import ChartBar from '../components/charts/ChartBar.vue';
//import Details from '../components/Details.vue';
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
      <label class="block text-sm/6 font-medium text-gray-900">Produtos por região</label>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
          <ChartRounded chartType="pie" />
        </div>
        <div class="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
          <ChartRounded chartType="doughnut" />
        </div>
        <div class="flex items-center justify-center h-80 rounded bg-gray-50 dark:bg-gray-800">
          <ChartPolarArea />
        </div>
      </div>
      <label class="block text-sm/6 font-medium text-gray-900">Produtos por mês</label>
      <div class="flex items-center justify-center h-60 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <ChartLine />
      </div>
      <label class="block text-sm/6 font-medium text-gray-900">Produtos por data</label>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <ChartBar />
      </div>
    </div>
  </div>
</template>
