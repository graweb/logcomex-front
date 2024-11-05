// stores/chartStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth"; // Caso precise do token de autenticação
import { toast } from "../components/toast/Toast.ts";

export const useChartStore = defineStore("chart", {
  state: () => ({
    chartData: {
      labels: [] as string[],
      datasets: [] as { backgroundColor: string[]; data: number[] }[],
    },
  }),

  actions: {
    async fetchChartData() {
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
      };
      await axios
        .get("http://localhost/api/products", config)
        .then((res) => {
          this.chartData = res.data;
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
