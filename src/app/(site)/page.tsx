import { getTranslations } from "next-intl/server";

import About from "@/components/About";
// import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import CallToAction from "@/components/Home/CallToAction";
import Hero from "@/components/Home/Hero";
import Features from "@/components/Home/Features";
import Solutions from "@/components/Home/Solutions";
// import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
// import Team from "@/components/Team";

export async function generateMetadata() {
  const t = await getTranslations("metadata");
  return {
    title: t("title"),
    description: t("description"),
    keywords: [
      t("keywordsText1"),
      t("keywordsText2"),
      t("keywordsText3"),
      t("keywordsText4"),
      t("keywordsText5"),
      t("keywordsText6"),
      t("keywordsText7"),
      t("keywordsText8"),
      t("keywordsText9"),
    ],
    authors: {
      name: "HireFazz",
      url: "https://www.hirefazz.com",
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      url: "https://www.hirefazz.com",
    },
    publisher: "https://www.hirefazz.com",
    alternates: {
      canonical: "/",
    },
  };
}

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <About />
      <Solutions />
      {/* <Team />
      <Portfolio /> */}
      <Testimonials />
      <Brands />
      <Pricing />
      {/* <HomeBlogSection /> */}
      <Support />
      <CallToAction />
    </>
  );
}
