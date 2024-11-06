// stores/chartBarStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";

export const useChartBarStore = defineStore("chartBar", {
  state: () => ({
    barChartData: {
      labels: [] as string[],
      datasets: [] as {
        label: string;
        backgroundColor: string;
        data: number[];
      }[],
    },
  }),

  actions: {
    async fetchBarChartData(start_date: string, end_date: string) {
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
          hasOrder: 'asc'
        },
      };
      await axios
        .get("http://localhost/api/products", config)
        .then((res) => {
          this.barChartData = res.data;
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
