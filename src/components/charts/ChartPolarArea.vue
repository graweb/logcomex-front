<template>
    <PolarArea :data="data" :options="options" />
</template>

<script lang="ts">
  import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend
  } from 'chart.js'
  import { PolarArea } from 'vue-chartjs'
  import * as chartPolarAreaConfig from '../../stores/chartPolarAreaConfig.ts'
  
  ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)
  
  export default {
    name: 'App',
    components: {
      PolarArea
    },
    data() {
      return chartPolarAreaConfig
    }
  }
  </script>