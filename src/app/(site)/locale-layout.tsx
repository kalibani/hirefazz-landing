"use client";

import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "../../styles/globals.css";
import AuthProvider from "../context/AuthContext";
import ToasterContext from "../context/ToastContext";
import NextIntlProvider from "@/Providers/NextIntlProvider";
import Navbar from "@/components/Navbar";
import { AbstractIntlMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export default function LocalLayout({
  children,
  locale,
  messages,
}: Readonly<{
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}>) {
  return (
    <html lang={locale}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        {/* <!-- Favicon for All Browsers --> */}
        <link rel="icon" href="/favicon.ico" type="image/png" />

        {/* <!-- Favicon for Apple Touch Icon --> */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* <!-- Favicon for Android Devices --> */}
        <link
          rel="icon"
          sizes="192x192"
          href="/android-chrome-192x192.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/android-chrome-512x512.png"
          type="image/png"
        />

        {/* <!-- Favicon for Other Sizes --> */}
        <link
          rel="icon"
          sizes="16x16"
          href="/favicon-16x16.png"
          type="image/png"
        />
        <link
          rel="icon"
          sizes="32x32"
          href="/favicon-32x32.png"
          type="image/png"
        />

        {/* <!-- Manifest for Android --> */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <NextTopLoader
          color="#E11D48"
          crawlSpeed={300}
          showSpinner={false}
          shadow="none"
        />
        <NextIntlProvider locale={locale} messages={messages}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="dark"
          >
            <AuthProvider>
              <ToasterContext />
              <Navbar />
              {children}
              <Footer />
            </AuthProvider>
          </ThemeProvider>
        </NextIntlProvider>
      </body>
    </html>
  );
}
