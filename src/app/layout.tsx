import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Skipnav from "@/components/ui/Skipnav";
import ThemeSelector from "@/components/ui/ThemeSelector";
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Langlois - Software Engineer",
  description:
    "Portfolio website for Vincent Langlois, a software engineer specializing in frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              const theme = new URLSearchParams(window.location.search).get('theme');
              if (theme) {
                document.documentElement.setAttribute('data-theme', theme);
              }
            `,
          }}
        />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        {/* <header>
          Header
        </header> */}
        <Skipnav />
        <ThemeSelector />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
