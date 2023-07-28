import Environments from "../environments";
import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import axios from "axios";

const getAxios = {
  instance: (token = "", url = Environments!.API_URL): AxiosInstance => {
    const config: AxiosRequestConfig = {
      headers: {},
    };

    config.baseURL = url;

    if (token) {
      config.headers = { Authorization: `Bearer ${token}` };
    }

    const instance = Axios.create(config);
    if (Environments?.LOG_AXIOS) {
      instance.interceptors.request.use((request) => {
        console.log("Start request to", request.url);
        return request;
      });

      instance.interceptors.response.use((response) => {
        console.log("Response headers", response.headers);
        console.log("Response data", response.data);
        console.log("End request to", response.config.url);
        return response;
      });
    }

    instance.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          console.log("Error 401");
        }
        return Promise.reject(error);
      }
    );

    return instance;
  },
  axiosBaseQuery:
    (
      baseUrl = Environments!.API_URL
    ): BaseQueryFn<
      {
        url: string;
        method: AxiosRequestConfig["method"];
        data?: AxiosRequestConfig["data"];
        params?: AxiosRequestConfig["params"];
        headers?: AxiosRequestConfig["headers"];
        token?: string;
      },
      unknown,
      unknown
    > =>
    async ({ url, method, data, params, headers, token }) => {
      try {
        const tokenHeader = token ? { Authorization: `Bearer ${token}` } : {};
        const result = await axios({
          url: baseUrl + url,
          method,
          data,
          params,
          headers: { ...headers, ...tokenHeader },
        });
        return { data: result.data };
      } catch (axiosError) {
        const err = axiosError as AxiosError;
        return {
          error: {
            status: err.response?.status,
            data: err.response?.data,
          },
        };
      }
    },
  error: (error: AxiosError) => {
    if (error.response) {
      console.log("Status", error.response.status, error.response.data);
    } else if (error.request) {
      console.log("Request", error.request);
    } else {
      console.log("Error", error.message);
    }
  },
};

export default getAxios;
