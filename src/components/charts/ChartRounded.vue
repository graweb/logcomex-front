<template>
    <Pie :data="chartData" v-if="chartType == 'pie'" />
    <Doughnut :data="chartData" v-if="chartType == 'doughnut'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useChartStore } from '../../stores/chartRounded';
import { Pie, Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export default defineComponent({
    name: 'Chart',
    components: {
        Pie,
        Doughnut,
    },
    props: {
        chartType: {
            type: String,
            required: true,
        },
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
        chartData() {
            const chartStore = useChartStore();
            return chartStore.chartData;
        },
    },
    async mounted() {
        const chartStore = useChartStore();
        await chartStore.fetchChartData();
    },
});
</script>