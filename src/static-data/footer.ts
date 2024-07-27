import { FooterLink } from "@/types/footer";
import { v4 as uuid } from "uuid";

export const footerLinks: FooterLink[] = [
  {
    id: uuid(),
    title: "home",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "services",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "pricing",
    href: "/",
    external: false,
  },
  {
    id: uuid(),
    title: "careers",
    href: "/",
    external: false,
    badge: {
      text: "Hiring",
    },
  },
  {
    id: uuid(),
    title: "pressMedia",
    href: "/media",
    external: false,
  },
  {
    id: uuid(),
    title: "ourBlog",
    href: "/blog",
    external: false,
  },
];

export const footerLinksTwo: FooterLink[] = [
  {
    id: uuid(),
    title: "title1",
    href: "/coming-soon",
    external: false,
  },
  {
    id: uuid(),
    title: "title2",
    href: "/coming-soon",
    external: false,
  },
  {
    id: uuid(),
    title: "title3",
    href: "/coming-soon",
    external: false,
  },
  {
    id: uuid(),
    title: "title4",
    href: "/coming-soon",
    external: false,
  },
  {
    id: uuid(),
    title: "title5",
    href: "/coming-soon",
    external: false,
  },
];
