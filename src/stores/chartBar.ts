// stores/chartBarStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";
import dayjs from "dayjs";

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
    async fetchBarChartData() {
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        params: {
          start_date: dayjs().startOf("month").format("YYYY-MM-DD"),
          end_date: dayjs().endOf("month").format("YYYY-MM-DD"),
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
