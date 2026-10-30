# NFT Marketplace

Marketplace de NFTs com frontend em React/TypeScript e API em Express/Socket.IO.

## Requisitos

- Node.js 22 ou superior
- npm 11 ou superior

## Instalação

```bash
npm run install:all
```

## Rodar o projeto

```bash
npm run dev            # frontend + API
npm run dev:frontend   # apenas o frontend
npm run dev:api        # apenas a API
```

- Frontend: http://localhost:5173
- API: http://localhost:3333

O frontend usa MSW por padrão, com dados simulados, e funciona sem a API. A API
ainda não tem servidor implementado; `api/src/index.ts` é o ponto de entrada.

## Scripts

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Frontend e API em paralelo |
| `npm run build` | Build de produção dos dois projetos |
| `npm run typecheck` | Verificação de tipos |
| `npm run lint` | ESLint do frontend |
| `npm run format` | Prettier do frontend |
| `npm run test:e2e` | Testes Playwright |
| `npm run test:e2e:ui` | Playwright em modo UI |

Na primeira execução dos testes, instale o navegador:

```bash
cd frontend
npx playwright install chromium
```

## Variáveis de ambiente

Copie os exemplos e ajuste se necessário:

```bash
cp frontend/.env.example frontend/.env.local
cp api/.env.example api/.env
```

O frontend usa MSW por padrão. Para apontar para a API real, configure
`VITE_DATA_SOURCE=api`, `VITE_API_URL` e `VITE_SOCKET_URL` em
`frontend/.env.local`.

## Estrutura

```text
frontend/   # SPA (Vite, React, TanStack Router/Query, MSW)
api/        # API (Express, Socket.IO)
```

## Deploy

- Frontend: Vercel, com Root Directory `frontend`.
- API: Render, com Root Directory `api`.
