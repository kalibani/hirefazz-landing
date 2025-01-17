import { useTranslations } from "next-intl";
import SectionTitle from "../Common/SectionTitle";

export default function Brands() {
  const t = useTranslations("trustedBy");
  return (
    <section className="pt-14 sm:pt-20 lg:pt-24">
      <div className="px-4 xl:container">
        <SectionTitle title={t("title")} paragraph={t("description")} />
        <div className="border-b pb-24 dark:border-[#2E333D]">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/brands/uideck.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/brands/uideck-2.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/brands/tailadmin.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/brands/tailadmin-2.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/brands/graygrids.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/brands/graygrids-2.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/brands/lineicons.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/brands/lineicons-2.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
                <a
                  href="#"
                  className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="./images/brands/plainadmin.svg"
                    alt="image"
                    className="hidden h-10 w-full dark:block"
                  />
                  <img
                    src="./images/brands/plainadmin-2.svg"
                    alt="image"
                    className="h-10 w-full dark:hidden"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
