import { z } from "zod";

const envSchema = z.object({
  VITE_DATA_SOURCE: z.enum(["mock", "api"]).default("mock"),
  VITE_API_URL: z.string().trim().min(1).default("/api"),
  VITE_SOCKET_URL: z.string().trim().default(""),
  VITE_SOCKET_PATH: z.string().trim().startsWith("/").default("/socket.io"),
  VITE_ENABLE_MSW: z.enum(["true", "false"]).optional(),
});

const parsed = envSchema.safeParse(import.meta.env);

if (!parsed.success) {
  throw new Error(`Variáveis de ambiente inválidas:\n${z.prettifyError(parsed.error)}`);
}

const data = parsed.data;
const dataSource = data.VITE_DATA_SOURCE;

export const env = {
  dataSource,
  apiBaseUrl: data.VITE_API_URL,
  socketUrl: data.VITE_SOCKET_URL,
  socketPath: data.VITE_SOCKET_PATH,
  mswEnabled:
    data.VITE_ENABLE_MSW === undefined ? dataSource === "mock" : data.VITE_ENABLE_MSW === "true",
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
