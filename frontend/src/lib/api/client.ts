import axios from "axios";

import { env } from "@/lib/env";

import { ApiError } from "./errors";
import { getAccessToken } from "./token-storage";

export const apiClient = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 20_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getAccessToken();
  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(ApiError.from(error)),
);
