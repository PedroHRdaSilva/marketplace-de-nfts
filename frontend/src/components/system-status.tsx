import { useQuery } from "@tanstack/react-query";
import { RefreshCwIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { ApiEnvelope, HealthResponse } from "@/contracts";
import { apiClient } from "@/lib/api/client";
import { getErrorMessage } from "@/lib/api/errors";
import { queryKeys } from "@/lib/api/query-keys";
import { env } from "@/lib/env";

async function fetchHealth(): Promise<HealthResponse> {
  const response = await apiClient.get<ApiEnvelope<HealthResponse>>("/health");
  return response.data.data;
}

export function SystemStatus() {
  const health = useQuery({
    queryKey: queryKeys.system.health,
    queryFn: fetchHealth,
    retry: false,
    staleTime: 10_000,
  });

  return (
    <Card data-testid="system-status" aria-live="polite">
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <CardTitle>Status do ambiente</CardTitle>
          {health.isPending ? (
            <Skeleton className="h-5 w-20" />
          ) : health.isError ? (
            <Badge variant="destructive">indisponível</Badge>
          ) : (
            <Badge variant="secondary">{health.data.status}</Badge>
          )}
        </div>
        <CardDescription>
          {env.mswEnabled
            ? "REST e Socket.IO interceptados por MSW no navegador."
            : "Consumindo a API real configurada em VITE_API_URL."}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        {health.isPending ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ) : health.isError ? (
          <div className="space-y-3">
            <p role="alert" className="text-destructive">
              {getErrorMessage(health.error)}
            </p>
            <Button type="button" variant="outline" size="sm" onClick={() => void health.refetch()}>
              <RefreshCwIcon aria-hidden="true" />
              Tentar novamente
            </Button>
          </div>
        ) : (
          <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <dt className="text-muted-foreground">Fonte</dt>
            <dd className="font-medium">{env.dataSource}</dd>
            <dt className="text-muted-foreground">Serviço</dt>
            <dd className="font-medium">{health.data.service}</dd>
            <dt className="text-muted-foreground">Versão</dt>
            <dd className="font-mono text-xs">{health.data.version}</dd>
          </dl>
        )}
      </CardContent>
    </Card>
  );
}
