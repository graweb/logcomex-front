// stores/chartPolarAreaStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";
import dayjs from 'dayjs';

interface Dataset {
  label: string;
  backgroundColor: string;
  pointBackgroundColor: string;
  pointBorderColor: string;
  pointHoverBackgroundColor: string;
  pointHoverBorderColor: string;
  data: number[];
}

interface ChartPolarAreaData {
  labels: string[];
  datasets: Dataset[];
}

export const useChartPolarAreaStore = defineStore("chartPolarArea", {
  state: () => ({
    chartPolarAreaData: {
      labels: [] as string[],
      datasets: [] as Dataset[],
    } as ChartPolarAreaData,
  }),

  actions: {
    async fetchChartPolarAreaData() {
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        params: {
          start_date: dayjs().startOf('month').format('YYYY-MM-DD'),
          end_date: dayjs().endOf('month').format('YYYY-MM-DD'),
          paginate: false,
          hasMonth: false,
          hasOrder: 'asc'
        },
      };
      await axios
        .get("http://localhost/api/products", config)
        .then((res) => {
          this.chartPolarAreaData = res.data;
        })
        .catch((error) => {
          toast(
            "error",
            error.response?.data?.message || "Erro ao carregar dados"
          );
        });
    },
  },
});
