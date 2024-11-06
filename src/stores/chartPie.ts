// stores/chartStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";

export const useChartPieStore = defineStore("chartPie", {
  state: () => ({
    chartPieData: {
      labels: [] as string[],
      datasets: [] as { backgroundColor: string[]; data: number[] }[],
    },
  }),

  actions: {
    async fetchChartPieData(start_date: string, end_date: string) {
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        params: {
          start_date,
          end_date,
          paginate: false,
          hasMonth: false,
          hasOrder: 'desc'
        },
      };
      await axios
        .get(import.meta.env.VITE_API_URL+"/products", config)
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
