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
  /** Présent quand le bloc est une puce de liste. */
  listItem?: string;
  markDefs?: PortableTextMarkDef[];
  children: PortableTextSpan[];
}
