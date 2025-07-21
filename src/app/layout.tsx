import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import IntlProvider from "@/components/IntlProvider";

export const metadata: Metadata = {
  title: "Coffee: From Legend to Latte",
  description: "A curated collection of stories about coffee culture, history, and craftsmanship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white min-h-screen font-light">
        <IntlProvider>
          <Header />
          <main>
            {children}
          </main>
        </IntlProvider>
      </body>
    </html>
  );
}
