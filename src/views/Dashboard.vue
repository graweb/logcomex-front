<script setup>
import { ref, reactive } from 'vue';
import ChartPie from '../components/charts/ChartPie.vue';
import ChartDoughnut from '../components/charts/ChartDoughnut.vue';
import ChartPolarArea from '../components/charts/ChartPolarArea.vue';
import ChartLine from '../components/charts/ChartLine.vue';
import ChartBar from '../components/charts/ChartBar.vue';
import Input from '../components/Input.vue';
import { toast } from '../components/toast/Toast.ts';
import dayjs from 'dayjs';

//stores
import { useChartPieStore } from '../stores/chartPie';
import { useChartDoughnutStore } from '../stores/chartDoughnut';
import { useChartPolarAreaStore } from '../stores/chartPolarArea';
import { useChartLineStore } from '../stores/chartLine';
import { useChartBarStore } from '../stores/chartBar';

// Store Instances
const chartPieStore = useChartPieStore();
const chartDoughnutStore = useChartDoughnutStore();
const chartPolarAreaStore = useChartPolarAreaStore();
const chartLineStore = useChartLineStore();
const chartBarStore = useChartBarStore();

const fields = reactive({
  start_date: dayjs().startOf('month').format('YYYY-MM-DD'),
  end_date: dayjs().endOf('month').format('YYYY-MM-DD'),
});

function search() {
  if (fields.start_date == "") {
    toast('warning', 'Preencha a data inicial!');
    return;
  }

  if (fields.end_date == "") {
    toast('warning', 'Preencha a data final!');
    return;
  }

  // Chama os métodos de fetch de cada store passando as datas
  chartPieStore.fetchChartPieData(fields.start_date, fields.end_date);
  chartDoughnutStore.fetchChartDoughnutData(fields.start_date, fields.end_date);
  chartPolarAreaStore.fetchChartPolarAreaData(fields.start_date, fields.end_date);
  chartLineStore.fetchChartLineData(fields.start_date, fields.end_date);
  chartBarStore.fetchBarChartData(fields.start_date, fields.end_date);
}
</script>

<template>
  <div class="p-4 sm:ml-64">
    <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <Input id="start_date" name="start_date" type="date" v-model="fields.start_date" label="Cadastrado de"
          @change="search" />
        <Input id="end_date" name="end_date" type="date" v-model="fields.end_date" label="Cadastrado até"
          @change="search" />
      </div>
      <hr />
      <label class="block text-sm/6 font-medium text-gray-900 mb-2 mt-4">Últimos 5 produtos cadastrados por
        região</label>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
        <div class="flex items-center justify-center h-80 rounded bg-gray-50">
          <ChartPie />
        </div>
        <div class="flex items-center justify-center h-80 rounded bg-gray-50">
          <ChartPolarArea />
        </div>
        <div class="flex items-center justify-center h-80 rounded bg-gray-50">
          <ChartDoughnut />
        </div>
      </div>
      <hr />
      <label class="block text-sm/6 font-medium text-gray-900 mb-2 mt-4">Valor atual x mínimo dos primeiros 12
        produtos</label>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50">
        <ChartBar />
      </div>
      <hr />
      <label class="block text-sm/6 font-medium text-gray-900 mb-2 mt-4">Quantidade atual x mínima dos últimos 12
        produtos</label>
      <div class="flex items-center justify-center h-60 mb-4 rounded bg-gray-50">
        <ChartLine />
      </div>

    </div>
  </div>
</template>
