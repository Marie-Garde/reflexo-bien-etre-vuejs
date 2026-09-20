import type { PortableTextBlock } from "@/general/interface/PortableText";
import type { SanityImage } from "@/home/interface/HomeContent";

export interface AboutHeaderSection {
  title: string;
  subtitle: string;
}

export interface AboutApproachSection {
  title: string;
  body: PortableTextBlock[];
  image: SanityImage;
  gallery: { _key: string; caption: string; image: SanityImage }[];
}

export interface AboutCtaSection {
  title: string;
  description: string;
  buttonLabel: string;
}

export interface AboutCareerSection {
  title: string;
  body: PortableTextBlock[];
  image: SanityImage;
  mobileImage?: SanityImage;
}

export interface AboutTrainingSection {
  title: string;
  items: { _key: string; date: string; title: string; subtitle?: string }[];
}

export interface AboutContent {
  header: AboutHeaderSection;
  approach: AboutApproachSection;
  cta: AboutCtaSection;
  career: AboutCareerSection;
  training: AboutTrainingSection;
}
