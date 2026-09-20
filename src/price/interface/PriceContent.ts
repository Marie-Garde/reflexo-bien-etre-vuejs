import type { SanityImage } from "@/home/interface/HomeContent";

export interface PriceItem {
  _key: string;
  title: string;
  time?: string;
  price?: string;
  description?: string;
  image: SanityImage;
}

export interface DualPriceItem {
  _key: string;
  title: string;
  faceToFace: string;
  online: string;
  image: SanityImage;
}

export interface PriceGroup {
  _key: string;
  title: string;
  items: PriceItem[];
}

export interface PriceContent {
  header: { title: string; subtitle: string };
  reflexo: { title: string; groups: PriceGroup[]; buttonLabel: string };
  tuina: { title: string; items: PriceItem[]; buttonLabel: string };
  qiGong: {
    title: string;
    faceToFaceLabel: string;
    onlineLabel: string;
    items: DualPriceItem[];
    buttonLabel: string;
  };
}
