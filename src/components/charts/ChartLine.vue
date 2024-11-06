<template>
    <Line :data="chartData" :options="options" />
</template>

<script lang="ts">
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { defineComponent } from 'vue'
import { useChartLineStore } from '../../stores/chartLine'
import dayjs from 'dayjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default defineComponent({
    name: 'ChartLine',
    components: {
        Line
    },
    computed: {
        chartData() {
            const chartLineStore = useChartLineStore();
            return chartLineStore.chartLineData;
        },
        options() {
            return {
                responsive: true,
                maintainAspectRatio: false,
            };
        }
    },
    async mounted() {
        const chartLineStore = useChartLineStore();
        await chartLineStore.fetchChartLineData(dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD'));
    },
});
</script>