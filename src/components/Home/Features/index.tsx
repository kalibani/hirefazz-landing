import SectionTitle from "@/components/Common/SectionTitle";
import { featuresData } from "@/static-data/features";
import SingleFeature from "./SingleFeature";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Features");
  return (
    <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="px-4 xl:container">
        {/* <!-- Section Title --> */}
        <SectionTitle
          mainTitle={t("features")}
          title={t("tagline")}
          paragraph={t("paragraph")}
        />

        <div className="-mx-4 flex flex-wrap justify-center">
          {featuresData.map((feature) => (
            <SingleFeature key={feature?.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
