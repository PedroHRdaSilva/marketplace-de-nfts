import { cn } from "@/lib/utils";

interface Palette {
  bg: string;
  fur: string;
  face: string;
  dark: string;
  accent: string;
}

const palettes: Palette[] = [
  { bg: "#241A14", fur: "#7A5638", face: "#E2C9A8", dark: "#1A120D", accent: "#D89A54" },
  { bg: "#E4D6C0", fur: "#4A3222", face: "#F3E7D6", dark: "#241A14", accent: "#B4693A" },
  { bg: "#3A2A21", fur: "#C49A6C", face: "#F0DFC7", dark: "#211610", accent: "#E0A244" },
  { bg: "#5A4130", fur: "#2E1E16", face: "#D9BFA1", dark: "#191110", accent: "#C98A4B" },
  { bg: "#C98A4B", fur: "#3A2618", face: "#EAD6BC", dark: "#211610", accent: "#F2C078" },
  { bg: "#2C211C", fur: "#8C8A6A", face: "#E8DFC6", dark: "#1A1410", accent: "#B7A46B" },
  { bg: "#4A3428", fur: "#B98A5E", face: "#F1E2CE", dark: "#221711", accent: "#E8B267" },
];

const accessories = ["shades", "beanie", "chain", "plain"] as const;

type Accessory = (typeof accessories)[number];

function hashSeed(seed: string): number {
  let hash = 2166136261;

  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return Math.abs(hash);
}

/**
 * Ilustração determinística em tons de café: a mesma semente sempre gera
 * a mesma paleta e o mesmo acessório, servindo de placeholder de arte.
 */
export function NftArtwork({
  seed,
  label,
  className,
}: {
  seed: string;
  label?: string;
  className?: string;
}) {
  const hash = hashSeed(seed);
  const palette = palettes[hash % palettes.length];
  const accessory: Accessory = accessories[Math.floor(hash / 7) % accessories.length];

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      className={cn("size-full", className)}
    >
      <rect width="100" height="100" fill={palette.bg} />
      <circle cx="50" cy="44" r="38" fill={palette.accent} opacity="0.16" />
      <circle cx="85" cy="13" r="14" fill={palette.face} opacity="0.1" />
      <circle cx="11" cy="89" r="19" fill={palette.fur} opacity="0.16" />
      <path d="M0 100 L100 0" stroke={palette.face} strokeWidth="0.6" opacity="0.08" />

      <g>
        <circle cx="18" cy="52" r="11" fill={palette.fur} />
        <circle cx="82" cy="52" r="11" fill={palette.fur} />
        <circle cx="18" cy="52" r="6" fill={palette.face} opacity="0.5" />
        <circle cx="82" cy="52" r="6" fill={palette.face} opacity="0.5" />

        <ellipse cx="50" cy="50" rx="31" ry="34" fill={palette.fur} />
        <ellipse cx="50" cy="57" rx="22" ry="25" fill={palette.face} opacity="0.94" />
        <ellipse cx="50" cy="68" rx="13" ry="10" fill={palette.dark} opacity="0.12" />

        <path
          d="M35 41 Q41 38 47 41"
          stroke={palette.dark}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />
        <path
          d="M53 41 Q59 38 65 41"
          stroke={palette.dark}
          strokeWidth="1.6"
          strokeLinecap="round"
          fill="none"
          opacity="0.45"
        />

        <circle cx="41" cy="49" r="3.4" fill={palette.dark} />
        <circle cx="59" cy="49" r="3.4" fill={palette.dark} />
        <circle cx="42.2" cy="47.8" r="1.1" fill={palette.face} />
        <circle cx="60.2" cy="47.8" r="1.1" fill={palette.face} />

        <circle cx="46" cy="67" r="1.3" fill={palette.dark} opacity="0.5" />
        <circle cx="54" cy="67" r="1.3" fill={palette.dark} opacity="0.5" />

        <path
          d="M44 72 Q50 76.5 56 72"
          stroke={palette.dark}
          strokeWidth="1.4"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
      </g>

      {accessory === "shades" ? (
        <g>
          <path d="M27 45 L33 46" stroke={palette.dark} strokeWidth="2.4" strokeLinecap="round" />
          <path d="M73 45 L67 46" stroke={palette.dark} strokeWidth="2.4" strokeLinecap="round" />
          <rect x="32" y="43" width="16" height="11" rx="4" fill={palette.dark} />
          <rect x="52" y="43" width="16" height="11" rx="4" fill={palette.dark} />
          <rect x="47" y="46.5" width="6" height="2.6" rx="1.3" fill={palette.dark} />
          <path d="M36 46 L42 46" stroke={palette.face} strokeWidth="1.2" opacity="0.35" />
          <path d="M56 46 L62 46" stroke={palette.face} strokeWidth="1.2" opacity="0.35" />
        </g>
      ) : null}

      {accessory === "beanie" ? (
        <g>
          <path d="M22 40 Q50 10 78 40 Z" fill={palette.accent} />
          <rect x="20" y="36" width="60" height="8" rx="4" fill={palette.accent} opacity="0.92" />
          <circle cx="50" cy="14" r="4.5" fill={palette.accent} />
          <circle cx="50" cy="14" r="4.5" fill={palette.face} opacity="0.25" />
        </g>
      ) : null}

      {accessory === "chain" ? (
        <g>
          <path
            d="M33 82 Q50 93 67 82"
            stroke={palette.accent}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="0.5 4.5"
            fill="none"
          />
          <circle cx="50" cy="89" r="3.6" fill={palette.accent} />
        </g>
      ) : null}
    </svg>
  );
}
