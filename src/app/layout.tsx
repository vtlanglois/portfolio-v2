import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Container from "@/components/ui/Container";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Langlois - Software Engineer",
  description: "Portfolio website for Vincent Langlois, a software engineer specializing in frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <header>
          Header
        </header> */}
        <main>{children}</main>
        {/* <Container>
                  <footer>
          Footer
        </footer>
        </Container> */}
      </body>
    </html>
  );
}
