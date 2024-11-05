<template>
    <Bar :data="data" :options="options" />
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    ChartData
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartBarConfig from '../../stores/chartBarConfig.ts'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const options = chartBarConfig.options
const data = ref<ChartData<'bar'>>({
    datasets: []
})

onMounted(() => {
    setInterval(() => {
        data.value = chartBarConfig.randomData()
    }, 1000)
})
</script>