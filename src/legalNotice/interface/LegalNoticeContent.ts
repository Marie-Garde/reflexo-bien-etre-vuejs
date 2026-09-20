import type { PortableTextBlock } from "@/general/interface/PortableText";

export interface LegalSection {
  _key: string;
  title: string;
  body: PortableTextBlock[];
  warning?: PortableTextBlock[];
}

export interface LegalNoticeContent {
  title: string;
  sections: LegalSection[];
}
