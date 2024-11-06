<template>
    <Doughnut :data="chartDoughnutData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChartDoughnutStore } from '../../stores/chartDoughnut';
import { Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import dayjs from 'dayjs'

ChartJS.register(ArcElement, Tooltip, Legend);

export default defineComponent({
    name: 'Chart',
    components: {
        Doughnut,
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
        chartDoughnutData() {
            const chartStore = useChartDoughnutStore();
            return chartStore.chartDoughnutData;
        },
    },
    async mounted() {
        const chartStore = useChartDoughnutStore();
        await chartStore.fetchChartDoughnutData(dayjs().startOf('month').format('YYYY-MM-DD'), dayjs().endOf('month').format('YYYY-MM-DD'));
    },
});
</script>