export type DataSource = "mock" | "api";

export interface HealthResponse {
  status: "ok";
  service: string;
  version: string;
  dataSource: DataSource;
  time: string;
}
