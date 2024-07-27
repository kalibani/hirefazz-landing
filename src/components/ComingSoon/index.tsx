"use client";
import { useState, useRef, LegacyRef, FormEvent } from "react";
import { useTranslations } from "next-intl";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { LoaderCircle } from "lucide-react";

const ComingSoon = () => {
  const t = useTranslations("comingSoon");
  const [isLoading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const submitNotification = (error = "") => {
    if (error) {
      toast.error(`Failed to sent message: ${error}`, {
        style: {
          background: "#eb4034",
          color: "#fff",
          maxWidth: 500,
        },
      });
    } else {
      toast.success(`Successfully sent message`, {
        style: {
          background: "#04111d",
          color: "#fff",
        },
      });
    }
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current?.email?.value) {
      setLoading(true);
      const target = e.target as HTMLFormElement;

      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID_2!,
          form.current!,
          process.env.NEXT_PUBLIC_KEY,
        )
        .then(
          () => {
            submitNotification();
          },
          (error) => {
            submitNotification(error?.text);
          },
        )
        .finally(() => {
          target.reset();
          setLoading(false);
        });
    } else {
      submitNotification("Please fill the email");
    }
  };

  return (
    <section
      id="support"
      className="min-h-[100px] pt-14 sm:pt-20 lg:min-h-[400px] lg:pt-[130px]"
    >
      <div className="flex justify-center px-4 xl:container ">
        <div className="-mx-4 flex flex-col gap-4 md:gap-8">
          <h1 className="text-xl font-semibold lg:text-4xl">{t("title")} !</h1>

          <div className="max-w-[780px] pt-[30px]">
            <form ref={form as LegacyRef<HTMLFormElement>} onSubmit={sendEmail}>
              <label
                htmlFor="email"
                className="mb-3 block font-heading text-base text-dark dark:text-white"
              >
                {" "}
                {t("email")}{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder={t("email")}
                className="w-full border-b bg-transparent px-2 py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
              />
              <button
                className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-6 py-[10px] font-heading text-base text-white hover:bg-opacity-90 md:px-8 md:py-[14px]"
                disabled={isLoading}
              >
                {t("notifyMe")}
                {isLoading ? <LoaderCircle className="animate-spin" /> : null}
              </button>
            </form>
          </div>

          <p className="text-lg lg:text-2xl">{t("description")}</p>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
