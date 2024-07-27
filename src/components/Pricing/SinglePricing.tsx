"use client";

import axios from "axios";
import SingleOffer from "./SingleOffer";
import { useTranslations } from "next-intl";

export default function SinglePricing({ price }: any) {
  const t = useTranslations("Pricing");
  // const handleSubscription = async (e: any) => {
  //   e.preventDefault();
  //   const { data } = await axios.post(
  //     "/api/payment",
  //     {
  //       priceId: price.id,
  //     },
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     },
  //   );
  //   window.location.assign(data);
  // };

  return (
    <div
      className={`w-full sm:w-1/2 lg:w-1/3 ${t(price?.nickname) === "Plus" ? "dark:border-[#2E333D] sm:border-l lg:border-x" : ""}`}
    >
      <div className="pb-20 pt-10 text-center">
        <div className="border-b dark:border-[#2E333D]">
          <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
            {t(price?.nickname)}
          </h3>
          <p className="pb-10 text-base text-dark-text">{t(price?.subtitle)}</p>
        </div>
        <div className="border-b py-10 dark:border-[#2E333D]">
          <h3 className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
            {" "}
            <sup className="-mb-2 text-[35px]">
              IDR{" "}
              {(price.unit_amount / 100).toLocaleString("id-ID", {
                currency: "IDR",
              })}{" "}
            </sup>
          </h3>

          <p className="mx-auto max-w-[300px] text-base text-dark-text">
            {t(price?.description)}
          </p>
        </div>
        <div className="space-y-4 px-10 pb-[20px] pt-10 text-left">
          <SingleOffer
            text={t("singleOffer1", {
              amount:
                t(price?.nickname) === "Starter"
                  ? 250
                  : t(price?.nickname) === "Plus"
                    ? 500
                    : 1500,
            })}
            status="active"
          />
          <SingleOffer
            text={t("singleOffer2", {
              amount: t(price?.nickname) === "Starter" ? 25 : 100,
            })}
            status="active"
          />
          <SingleOffer
            text={t("singleOffer3", {
              amount: t(price?.nickname) === "Starter" ? 50 : 100,
            })}
            status="active"
          />
          <SingleOffer
            text={t("singleOffer4", {
              amount: t(price?.nickname) === "Business" ? "16MB" : "4MB",
            })}
            status="active"
          />
          <SingleOffer text={t("singleOffer5")} status="active" />
          <SingleOffer text={t("singleOffer6")} status="active" />
          <SingleOffer text={t("singleOffer7")} status="active" />
          <SingleOffer text={t("singleOffer8")} status="active" />
          <SingleOffer text={t("singleOffer9")} status="active" />
          <SingleOffer text={t("singleOffer10")} status="active" />
          <SingleOffer text={t("singleOffer11")} status="active" />
          <SingleOffer
            text={t("singleOffer12")}
            status={`${t(price?.nickname) === "Starter" ? "inactive" : "active"}`}
          />
          <SingleOffer
            text={t("singleOffer13")}
            status={`${t(price?.nickname) === "Business" ? "active" : "inactive"}`}
          />
          <SingleOffer
            text={t("singleOffer14")}
            status={`${t(price?.nickname) === "Business" ? "active" : "inactive"}`}
          />
          <SingleOffer
            text={t("singleOffer15")}
            status={`${t(price?.nickname) === "Business" ? "active" : "inactive"}`}
          />
        </div>
        <button
          onClick={() => console.log("test")}
          className="mt-4 inline-flex items-center rounded bg-primary px-8 py-[14px] font-heading text-base text-white duration-200 hover:bg-primary/90"
        >
          {t("tryFree")}
          <span className="pl-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
