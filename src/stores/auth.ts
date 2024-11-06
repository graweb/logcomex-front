// src/store/auth.ts
import { defineStore } from "pinia";
import router from "../router";
import { toast } from '../components/toast/Toast.ts';
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    accessToken: "",
  }),
  actions: {
    init() {
      this.checkUserLogged();
      this.user = JSON.parse(localStorage.getItem("user") as string) || null;
      this.accessToken = localStorage.getItem("access_token") || "";
    },
    setUser(payload: { user: any; token: string }) {
      this.user = payload.user;
      this.accessToken = payload.token || "";

      localStorage.setItem("user", JSON.stringify(this.user));
      localStorage.setItem("access_token", this.accessToken);
    },
    removeUser() {
      this.user = null;
      this.accessToken = "";
      localStorage.removeItem("user");
      localStorage.removeItem("access_token");
      router.push("/login");
    },
    async login(email: string, password: string) {
      await axios.post(import.meta.env.VITE_API_URL+'/login', {
        email,
        password
      })
      .then((res) => {
        this.setUser(res.data.data);
        router.push("/app/dashboard");
      })
      .catch((error) => {
        toast('error', error.response?.data?.message || 'Erro ao fazer login');
      });
    },
    async checkUserLogged() {
      await axios.post(import.meta.env.VITE_API_URL+'/check_user')
      .then(() => {
      })
      .catch(() => {
        this.removeUser();
      });
    },
    async logout() {
      const config = {
        headers: { Authorization: `Bearer ${this.accessToken}` }
      };
      await axios.post(import.meta.env.VITE_API_URL+'/logout', '', config)
      .then(() => {
        this.removeUser();
      })
      .catch((error) => {
        toast('error', error.response?.data?.message || 'Erro ao fazer logout');
      });
    },
  },
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
});
