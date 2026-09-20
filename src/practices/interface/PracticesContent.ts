import type { PortableTextBlock } from "@/general/interface/PortableText";
import type { SanityImage } from "@/home/interface/HomeContent";

export interface PracticesHeaderSection {
  title: string;
  sectionTitle: string;
  body: PortableTextBlock[];
}

export interface PracticesBenefitsSection {
  title: string;
  subtitle: string;
  image: SanityImage;
  mobileImage?: SanityImage;
  items: { _key: string; title: string; body: PortableTextBlock[] }[];
  conclusion: string;
}

export interface PracticesPillarsSection {
  title: string;
  body: PortableTextBlock[];
  officeLabel: string;
  officeImage: SanityImage;
  outsideLabel: string;
  outsideImage: SanityImage;
}

export interface PracticesSessionSection {
  title: string;
  steps: { _key: string; title: string; description: string }[];
}

export interface PracticesContent {
  header: PracticesHeaderSection;
  benefits: PracticesBenefitsSection;
  pillars: PracticesPillarsSection;
  sessionProgress: PracticesSessionSection;
}

// ------------------------------------------------- Séances au cabinet

export type ImagePosition = "top" | "center" | "bottom";

export interface SessionBlock {
  title: string;
  body: PortableTextBlock[];
  quote: string;
  image: SanityImage;
  imagePosition?: ImagePosition;
}

export interface SessionDetail {
  _key: string;
  title: string;
  first: SessionBlock;
  second: SessionBlock;
  rhythm: {
    title: string;
    body: PortableTextBlock[];
    points: string[];
    buttonLabel: string;
  };
}

export interface OfficeSessionContent {
  header: { title: string; subtitle: string; backgroundImage: SanityImage };
  why: {
    cards: { _key: string; title: string; body: PortableTextBlock[]; image: SanityImage }[];
  };
  summary: {
    title: string;
    headers: string[];
    rows: { _key: string; cells: string[] }[];
    backgroundImage: SanityImage;
  };
  sessions: SessionDetail[];
  checkup: { title: string; body: PortableTextBlock[]; backgroundImage: SanityImage };
  after: {
    title: string;
    body: PortableTextBlock[];
    items: { _key: string; title: string; description: string }[];
  };
}

// ------------------------------------------------ Séances extérieures

export type PracticalIcon = "clock" | "calendar" | "people" | "shirt";

export interface OutsideSessionContent {
  header: { title: string; subtitle: string; backgroundImage: SanityImage };
  buttonLabel: string;
  practice: { title: string; body: PortableTextBlock[]; image: SanityImage };
  session: { title: string; body: PortableTextBlock[]; image: SanityImage };
  why: { title: string; body: PortableTextBlock[]; reasons: string[] };
  who: {
    title: string;
    text: string;
    people: { _key: string; label: string; image: SanityImage }[];
  };
  how: {
    title: string;
    infos: { _key: string; text: string; icon: PracticalIcon }[];
  };
}
