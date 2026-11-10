import type { PortableTextBlock } from "@/general/interface/PortableText";

export interface CgvSection {
  _key: string;
  title: string;
  body: PortableTextBlock[];
  warning?: PortableTextBlock[];
}

export interface CgvContent {
  title: string;
  intro?: PortableTextBlock[];
  sections: CgvSection[];
  updatedAt?: string;
}
