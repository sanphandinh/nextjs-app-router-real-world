import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import "./globals.css";
import "./vendors.css";
import Header from "./components/header";
import Footer from "./components/footer";

const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  variable: "--font-titillium-web",
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "Conduit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${titilliumWeb.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
