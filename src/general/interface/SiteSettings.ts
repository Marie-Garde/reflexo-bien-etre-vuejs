export type NavDestination = "home" | "about" | "practices" | "seasons" | "price" | "contact";

export interface NavItem {
  _key: string;
  label: string;
  destination: NavDestination;
  mobileOnly?: boolean;
}

export interface SiteSettings {
  topBar: { address: string; phone: string };
  navItems: NavItem[];
  appointmentLabel: string;
  social: { title: string; instagramUrl: string; facebookUrl: string };
  footer: {
    warning: string;
    name: string;
    societyName: string;
    phone: string;
    email: string;
    address: string;
    legal: {
      copyright: string;
      siteMapLabel: string;
      legalPageLabel: string;
      creatorLabel: string;
      creatorUrl: string;
    };
  };
}
