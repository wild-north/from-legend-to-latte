import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Coffee: From Legend to Latte",
  description: "A blog about coffee culture, history, and brewing techniques",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-white min-h-screen font-light">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
