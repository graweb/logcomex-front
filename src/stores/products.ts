// stores/products.ts
import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./auth";
import { toast } from "../components/toast/Toast.ts";

export const useProductsStore = defineStore("products", {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts(filters: any) {
        console.log(filters);
      const authStore = useAuthStore();
      const config = {
        headers: {
          Authorization: `Bearer ${authStore.accessToken}`,
        },
        params: {
            paginate: true,
            filters
        },
      };
      await axios
        .get("http://localhost/api/products", config)
        .then((res) => {
          this.products = res.data.data;
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
