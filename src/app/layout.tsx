import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/sections/Footer";

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
    <html lang="en">
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
