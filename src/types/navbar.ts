export type NavbarItem = {
  id: string | number;
  isOpen?: boolean;
  title: string;
  href?: string;
  external?: boolean;
  submenu?: Submenu[];
  isComingSoon?: boolean;
  description?: string;
};

export type Submenu = {
  id: string | number;
  title: string;
  href: string;
  external?: boolean;
  isComingSoon?: boolean;
  description?: string;
};
