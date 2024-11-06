// stores/chartLineStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";

interface LineChartLineData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    data: number[];
  }[];
}

export const useChartLineStore = defineStore("chartLine", {
  state: () => ({
    chartLineData: {
      labels: [],
      datasets: [],
    } as LineChartLineData,
  }),

  actions: {
    async fetchChartLineData(start_date: string, end_date: string) {
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        params: {
          start_date,
          end_date,
          paginate: false,
          hasMonth: true,
          hasOrder: 'desc'
        },
      };
      await axios
        .get(import.meta.env.VITE_API_URL+"/products", config)
        .then((res) => {
          this.chartLineData = res.data;
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
