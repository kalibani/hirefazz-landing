import { useLocale, useMessages } from "next-intl";
import { getTranslations } from "next-intl/server";
import LocalLayout from "./locale-layout";

export async function generateMetada() {
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <LocalLayout locale={locale} messages={messages}>
      {children}
    </LocalLayout>
  );
}
