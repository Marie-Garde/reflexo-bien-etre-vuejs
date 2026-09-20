import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface CarouselSlide {
  _id?: string;
  image: SanityImageSource;
  title: string;
  description: string;
  link?: string;
}

export interface CarouselSlideText {
  text: string;
  subText: string;
}
