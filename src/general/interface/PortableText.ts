import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export interface PortableTextSpan {
  _type: "span";
  _key: string;
  text: string;
  marks?: string[];
}

export interface PortableTextMarkDef {
  _key: string;
  _type: string;
  href?: string;
}

export interface PortableTextBlock {
  _type: "block";
  _key: string;
  style?: string;
  /** Présent quand le bloc est une puce de liste : "bullet" ou "number". */
  listItem?: string;
  markDefs?: PortableTextMarkDef[];
  children: PortableTextSpan[];
}

/** Image insérée entre deux paragraphes dans le corps d'un article. */
export interface PortableTextImage {
  _type: "articleImage";
  _key: string;
  asset: SanityImageSource;
  alt?: string;
  caption?: string;
}

export type PortableTextNode = PortableTextBlock | PortableTextImage;
