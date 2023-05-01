import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig, Method } from "axios";
import { BaseResponseType } from "../types";

const baseURL = (process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_LOCAL_URL : process.env.REACT_APP_API_PROD_URL) + "/api/v1";

export const axiosClient = axios.create({
  baseURL: baseURL,
  // withCredentials: true
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const axiosBaseQuery = (): BaseQueryFn<{
  url: string
  method: Method
  data?: AxiosRequestConfig["data"]
  params?: AxiosRequestConfig["params"]
} | string,
  unknown,
  unknown> =>
  async (props) => {
    if (typeof props === "string") {
      try {
        const result = await axiosClient({ url: props });
        return { data: result.data };
      } catch (axiosError) {
        let err = axiosError as AxiosError;
        return {
          error: err.response?.data || {
            message: err.message,
          },
        };
      }
    }

    const { url, method, data, params } = props;

    try {
      const result = await axiosClient({ url: url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: err.response?.data || {
          message: err.message,
        },
      };
    }
  };
