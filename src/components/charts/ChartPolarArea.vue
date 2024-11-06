<template>
  <PolarArea :data="chartPolarAreaData" :options="options" />
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';
import { useChartPolarAreaStore } from '../../stores/chartPolarArea';
import { PolarArea } from 'vue-chartjs';
import dayjs from 'dayjs'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default defineComponent({
  name: 'ChartPolarArea',
  components: {
    PolarArea,
  },
  setup() {
    const chartStore = useChartPolarAreaStore();

    onMounted(() => {
      chartStore.fetchChartPolarAreaData(dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD'));
    });

    return {
      chartPolarAreaData: computed(() => chartStore.chartPolarAreaData),
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
});
</script>
