import SectionTitle from "@/components/Common/SectionTitle";
import { solutionsData } from "@/static-data/solutions";
import SingleSolution from "./SingleSolution";
import { useTranslations } from "next-intl";

export default function Solutions() {
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
          {solutionsData.map((solution) => (
            <SingleSolution key={solution?.id} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
