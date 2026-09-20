import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { PortableTextBlock } from "@/general/interface/PortableText";

export type SymptomIcon = "bodyPain" | "headache" | "insomnia" | "digestive" | "stress" | "fatigue";

export interface SanityImage {
  asset: SanityImageSource;
  alt?: string;
  /** Dimensions du fichier d'origine, remontées par la requête. */
  naturalWidth?: number;
  naturalHeight?: number;
}

export interface DifficultiesSection {
  title: string;
  subtitle: string;
  items: { _key: string; label: string; icon: SymptomIcon }[];
}

export interface SolutionSection {
  title: string;
  intro: PortableTextBlock[];
  practices: { _key: string; name: string; description: string }[];
  outro: PortableTextBlock[];
  buttonLabel: string;
  image: SanityImage;
}

export interface PresentationSection {
  title: string;
  body: PortableTextBlock[];
  buttonLabel: string;
  image: SanityImage;
}

export interface AppointmentSection {
  title: string;
  description: string;
  buttonLabel: string;
  backgroundImage: SanityImage;
}

export interface LatestArticlesSection {
  title: string;
  linkLabel: string;
}

export interface HomeContent {
  pageHeading: string;
  latestArticles: LatestArticlesSection;
  carouselLinkLabel: string;
  difficulties: DifficultiesSection;
  solution: SolutionSection;
  presentation: PresentationSection;
  appointment: AppointmentSection;
}
