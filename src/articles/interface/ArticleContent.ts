import type { PortableTextBlock, PortableTextNode } from "@/general/interface/PortableText";
import type { SanityImage } from "@/home/interface/HomeContent";

export interface ArticleSummary {
  _id: string;
  title: string;
  slug: string;
  publishedAt: string;
  coverImage: SanityImage;
}

export interface Article extends ArticleSummary {
  body: PortableTextNode[];
}

export interface ArticlesPageContent {
  title: string;
  headerImage: SanityImage;
  intro?: PortableTextBlock[];
  emptyMessage: string;
}
