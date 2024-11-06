<template>
    <Pie :data="chartPieData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChartPieStore } from '../../stores/chartPie';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs'

ChartJS.register(ArcElement, Tooltip, Legend);

export default defineComponent({
    name: 'Chart',
    components: {
        Pie,
    },
    data() {
        return {
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                },
            },
        };
    },
    computed: {
        chartPieData() {
            const chartStore = useChartPieStore();
            return chartStore.chartPieData;
        },
    },
    async mounted() {
        const chartStore = useChartPieStore();
        await chartStore.fetchChartPieData(dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD'));
    },
});
</script>