<template>
    <Bar :data="barChartData" :options="options" />
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import dayjs from 'dayjs'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import { useChartBarStore } from '../../stores/chartBar'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const options = {
    responsive: true,
    maintainAspectRatio: false,
}

const chartBarStore = useChartBarStore();
const barChartData = computed(() => chartBarStore.barChartData);

onMounted(() => {
    chartBarStore.fetchBarChartData(dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD'));
});
</script>