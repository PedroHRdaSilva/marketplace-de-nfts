import { PaletteIcon, RepeatIcon, ShieldCheckIcon, UsersIcon } from "lucide-react";

import type { Benefit, CatalogNft, CatalogSort, JournalEntry, PromoCard } from "./types";

export const heroStats = [
  { label: "Obras", value: "2.4k" },
  { label: "Artistas", value: "1.2k" },
  { label: "Volume", value: "18.4 ETH" },
] as const;

export const categories = [
  { id: "arte-digital", name: "Arte digital", count: 245 },
  { id: "fotografia", name: "Fotografia", count: 180 },
  { id: "musica", name: "Música", count: 132 },
  { id: "jogos", name: "Jogos", count: 107 },
  { id: "gifs", name: "GIFs", count: 93 },
  { id: "colecionaveis", name: "Colecionáveis", count: 87 },
  { id: "esportes", name: "Esportes", count: 71 },
  { id: "animais", name: "Animais", count: 64 },
  { id: "moda", name: "Moda", count: 52 },
  { id: "tecnologia", name: "Tecnologia", count: 49 },
] as const;

export const networks = [
  { id: "ethereum", name: "Ethereum" },
  { id: "polygon", name: "Polygon" },
  { id: "solana", name: "Solana" },
] as const;

export const MAX_PRICE_ETH = 3;

export const sortOptions: { value: CatalogSort; label: string }[] = [
  { value: "populares", label: "Mais populares" },
  { value: "recentes", label: "Mais recentes" },
  { value: "preco-asc", label: "Menor preço" },
  { value: "preco-desc", label: "Maior preço" },
];

export const catalogNfts: CatalogNft[] = [
  {
    id: "bored-ape-481",
    name: "Bored Ape #481",
    collection: "Bored Ape",
    priceEth: "1.99",
    categoryId: "arte-digital",
    networkId: "ethereum",
    createdAt: "2025-09-12T10:00:00.000Z",
    trendingScore: 92,
  },
  {
    id: "mutant-ape-659",
    name: "Mutant Ape #659",
    collection: "Mutant Ape",
    priceEth: "1.49",
    categoryId: "arte-digital",
    networkId: "ethereum",
    createdAt: "2025-09-28T10:00:00.000Z",
    trendingScore: 88,
  },
  {
    id: "degen-ape-1024",
    name: "Degen Ape #1024",
    collection: "Degen Ape",
    priceEth: "1.88",
    categoryId: "colecionaveis",
    networkId: "polygon",
    createdAt: "2025-08-30T10:00:00.000Z",
    trendingScore: 81,
  },
  {
    id: "clone-degen-732",
    name: "Clone Degen #732",
    collection: "Clone Degen",
    priceEth: "1.2",
    categoryId: "arte-digital",
    networkId: "polygon",
    createdAt: "2025-07-19T10:00:00.000Z",
    trendingScore: 64,
  },
  {
    id: "pixel-degen-916",
    name: "Pixel Degen #916",
    collection: "Pixel Degen",
    priceEth: "1.67",
    categoryId: "gifs",
    networkId: "solana",
    createdAt: "2025-10-02T10:00:00.000Z",
    trendingScore: 95,
  },
  {
    id: "tough-degen-804",
    name: "Tough Degen #804",
    collection: "Tough Degen",
    priceEth: "1.75",
    categoryId: "colecionaveis",
    networkId: "ethereum",
    createdAt: "2025-06-11T10:00:00.000Z",
    trendingScore: 58,
  },
  {
    id: "biden-ape-427",
    name: "Biden Ape #427",
    collection: "Biden Ape",
    priceEth: "1.9",
    categoryId: "fotografia",
    networkId: "ethereum",
    createdAt: "2025-05-22T10:00:00.000Z",
    trendingScore: 44,
  },
  {
    id: "biden-ape-118",
    name: "Biden Ape #118",
    collection: "Biden Ape",
    priceEth: "1.9",
    categoryId: "musica",
    networkId: "solana",
    createdAt: "2025-04-08T10:00:00.000Z",
    trendingScore: 39,
  },
  {
    id: "bored-ape-331",
    name: "Bored Ape #331",
    collection: "Bored Ape",
    priceEth: "0.95",
    categoryId: "arte-digital",
    networkId: "ethereum",
    createdAt: "2025-10-05T10:00:00.000Z",
    trendingScore: 87,
  },
];

export const journalEntries: JournalEntry[] = [
  {
    id: "como-funciona-a-propriedade-de-nfts",
    nftId: "bored-ape-481",
    publishedAt: "2025-09-12T12:00:00.000Z",
    readingTime: 2,
    title: "Como funciona a propriedade de NFTs",
    excerpt: "Aprenda a colecionar, negociar e verificar ativos digitais.",
  },
  {
    id: "10-artistas-digitais-para-acompanhar",
    nftId: "bored-ape-331",
    publishedAt: "2025-09-10T12:00:00.000Z",
    readingTime: 2,
    title: "10 artistas digitais para acompanhar",
    excerpt: "Conheça criadores que brilham no mercado digital.",
  },
  {
    id: "rareidade-atributos-e-procedencia",
    nftId: "mutant-ape-659",
    publishedAt: "2025-09-18T12:00:00.000Z",
    readingTime: 3,
    title: "Rareidade, atributos e procedência",
    excerpt: "Entenda raridade, procedência, atributos essenciais e utilidade.",
  },
  {
    id: "como-proteger-sua-carteira",
    nftId: "pixel-degen-916",
    publishedAt: "2025-09-16T12:00:00.000Z",
    readingTime: 2,
    title: "Como proteger sua carteira",
    excerpt: "Proteja sua carteira, seus ativos e sua identidade.",
  },
];

export const promoCards: PromoCard[] = [
  {
    id: "genesis",
    title: "Lançamentos gênesis de edição limitada",
    description: "Colecione edições exclusivas diretamente dos criadores de revelação.",
    ctaLabel: "Explorar",
    nftId: "bored-ape-481",
  },
  {
    id: "selecionada",
    title: "Arte digital selecionada — e muito mais",
    description: "Explore novos artistas, coleções verificadas e obras digitais que definem.",
    ctaLabel: "Explorar",
    nftId: "pixel-degen-916",
  },
];

export const benefits: Benefit[] = [
  {
    icon: ShieldCheckIcon,
    title: "Segurança em primeiro lugar",
    description: "Suas transações são protegidas por tecnologia de ponta.",
  },
  {
    icon: PaletteIcon,
    title: "Colecionismo sem limites",
    description: "Explore um universo infinito de obras digitais.",
  },
  {
    icon: UsersIcon,
    title: "Apoio da comunidade",
    description: "Faça parte de uma comunidade apaixonada por NFTs.",
  },
  {
    icon: RepeatIcon,
    title: "Negociação simples",
    description: "Compre, venda e troque com facilidade.",
  },
];
