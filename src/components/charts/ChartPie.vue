<template>
    <Pie :data="chartPieData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChartStore } from '../../stores/chartPie';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

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
            const chartStore = useChartStore();
            return chartStore.chartPieData;
        },
    },
    async mounted() {
        const chartStore = useChartStore();
        await chartStore.fetchChartPieData();
    },
});
</script>