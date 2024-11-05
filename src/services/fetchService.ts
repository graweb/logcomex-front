// Core
import axios, { type AxiosError } from "axios";

// Stores
import { useAuthStore } from "../stores/auth";

export default function () {
  const _instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL
  })

  async function instance<T>(
    url: string,
    method: "get" | "post" | "put" | "delete" = "get",
    config?: any,
    data: any = {},
  ): Promise<T | any> {    
    return await _instance({
      url,
      method,
      data,
      ...config
    })
    .then(res => {
      return res.data;
    })
    .catch((error: AxiosError) => {
      const { response, code } = error;

      if (response?.status === 401 && response.statusText === "Unauthorized") {
        const authStore = useAuthStore();
        authStore.removeUser();
        throw { 
          code,
          data: response?.data,
          status: response?.status,
          statusText: response?.statusText,
        };
      }

      throw { 
        code,
        data: response?.data,
        status: response?.status,
        statusText: response?.statusText,
      };
    })
  }

  _instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access_token");
    // Set Headers
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  })

  async function read<T>(url: string, config?: any) {
    return await instance<T>(url, "get", config, null);
  }

  async function create<T>(url: string, data?: any, config?: any) {
    return await instance<T>(url, "post", config, data);
  }

  async function update<T>(url: string, data?: any, config?: any) {
    return await instance<T>(url, "put", config, data);
  }

  async function remove<T>(url: string, config?: any, data?: null) {
    return await instance<T>(url, "delete", config, data);
  }

  return {
    read,
    create,
    update,
    remove
  }
}
