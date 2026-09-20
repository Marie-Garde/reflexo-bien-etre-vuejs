import type { PortableTextBlock } from "@/general/interface/PortableText";
import type { SanityImage } from "@/home/interface/HomeContent";

export type SeasonKey = "spring" | "summer" | "fall" | "winter" | "interSeason";
export type TilePosition = "top-left" | "top-right" | "bottom-right" | "bottom-left";

export interface SeasonTile {
  _key: string;
  label: string;
  destination: Exclude<SeasonKey, "interSeason">;
  position: TilePosition;
  image: SanityImage;
}

export interface SeasonsContent {
  header: { title: string; sectionTitle: string; body: PortableTextBlock[] };
  circle: {
    title: string;
    body: PortableTextBlock[];
    tiles: SeasonTile[];
    centerLabel: string;
  };
}

export interface SeasonContent {
  title: string;
  subtitle: string;
  headerImage: SanityImage;
  specialties: { title: string; body: PortableTextBlock[] };
  advices: {
    title: string;
    image: SanityImage;
    items: { _key: string; title: string; body: PortableTextBlock[] }[];
  };
  recipes: { title: string; placeholder: string; items: string[] };
}
