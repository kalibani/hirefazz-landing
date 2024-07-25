import { useLocale, useMessages } from "next-intl";

import LocalLayout from "./locale-layout";

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
