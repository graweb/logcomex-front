// stores/chartLineStore.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";
import dayjs from 'dayjs';

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
    async fetchChartLineData() {
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        params: {
          start_date: dayjs().startOf('month').format('YYYY-MM-DD'),
          end_date: dayjs().endOf('month').format('YYYY-MM-DD'),
          paginate: false,
          hasMonth: true,
          hasOrder: 'desc'
        },
      };
      await axios
        .get("http://localhost/api/products", config)
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
