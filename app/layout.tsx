import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/nunito-sans";
import "./globals.css";
import { site } from "@/lib/site";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsappChat from "@/components/whatsapp-chat";
import BackToTop from "@/components/back-to-top";
import JsonLd from "@/components/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Kraamzorg Zaandam & Zaanstreek | Inas Kraamzorg",
    template: "%s | Inas Kraamzorg",
  },
  description:
    "Persoonlijke kraamzorg in Zaandam en de Zaanstreek door kraamverzorgster Fatima. 100% vergoed door alle zorgverzekeraars. Tweetalige begeleiding (NL/AR). Meld je nu aan.",
  keywords: [
    "kraamzorg Zaandam",
    "kraamverzorgende Zaandam",
    "kraamzorg Zaanstreek",
    "kraamzorg aanvragen",
    "kraamzorg vergoeding",
    "kraamverzorgster",
    "kraamweek begeleiding",
  ],
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: site.url,
    siteName: site.name,
    title: "Kraamzorg Zaandam & Zaanstreek | Inas Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Zaandam door kraamverzorgster Fatima. 100% vergoed door alle zorgverzekeraars.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inas Kraamzorg — Persoonlijke kraamzorg in Zaandam",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kraamzorg Zaandam & Zaanstreek | Inas Kraamzorg",
    description:
      "Persoonlijke kraamzorg in Zaandam door kraamverzorgster Fatima. 100% vergoed door alle zorgverzekeraars.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: site.gscVerification,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#e5407e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body className="flex min-h-svh flex-col">
        {/* Google Tag (gtag.js) — GT + GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${site.gtId}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${site.gtId}');
            gtag('config', '${site.gaId}');
          `}
        </Script>
        <JsonLd />
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsappChat />
        <BackToTop />
      </body>
    </html>
  );
}
