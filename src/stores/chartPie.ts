// stores/chartStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";
import dayjs from 'dayjs';

export const useChartStore = defineStore("chartPie", {
  state: () => ({
    chartPieData: {
      labels: [] as string[],
      datasets: [] as { backgroundColor: string[]; data: number[] }[],
    },
  }),

  actions: {
    async fetchChartPieData() {
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
          hasOrder: 'desc'
        },
      };
      await axios
        .get("http://localhost/api/products", config)
        .then((res) => {
          this.chartPieData = res.data;
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