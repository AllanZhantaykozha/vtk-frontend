import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TanstackProvider from "@/providers/TanstackProvider";

const fonts = Montserrat({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "ВТК-К",
  description: "Official VTK website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.className}>
        <TanstackProvider>
          <Header />
          <div className="main">{children}</div>
          <Footer />
        </TanstackProvider>
      </body>
    </html>
  );
}
