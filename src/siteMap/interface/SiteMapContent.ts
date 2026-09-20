export interface SiteMapChild {
  _key: string;
  label: string;
  destination: string;
}

export interface SiteMapEntry extends SiteMapChild {
  children?: SiteMapChild[];
}

export interface SiteMapContent {
  title: string;
  entries: SiteMapEntry[];
}
