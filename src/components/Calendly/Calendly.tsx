"use client";
import { PopupButton } from "react-calendly";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function Calendly() {
  const t = useTranslations("Navbar");
  const [rootElement, setRootElement] = useState(null);

  useEffect(() => {
    // Wait for the component to be mounted before setting the rootElement
    if (typeof window !== "undefined") {
      // @ts-ignore
      setRootElement(document.getElementById("__next"));
    }
  }, []);
  return (
    <div className="cal_div">
      <PopupButton
        className="border-secondary text-secondary w-full whitespace-nowrap rounded border-2 px-6 py-2.5 text-center font-heading hover:bg-opacity-90 dark:border-white dark:text-white lg:w-auto"
        url="https://calendly.com/team-hirefazz/30min"
        // @ts-ignore
        rootElement={
          typeof window !== "undefined"
            ? document.getElementById("__next")
            : null
        }
        text={t("cta1")}
      />
    </div>
  );
}
