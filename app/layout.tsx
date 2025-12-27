import type { Metadata } from "next";
import { Theme } from "@radix-ui/themes";
import { Geist, Geist_Mono } from "next/font/google";
import '@/styles/base/_globals.scss';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laura's Portfolio",
  description: "Welcome to my personal portfolio website!",
};

interface RootLayoutProps { children: React.ReactNode; }

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg" />
        <link rel="shortcut icon" href="/icon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="portfolio" />
        <link rel="manifest" href="/icon/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Theme>
          {children}
        </Theme>
      </body>
    </html>
  );
}
