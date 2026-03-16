import type { Metadata } from "next";
import { DM_Sans, Bricolage_Grotesque, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CartPanel from "@/components/CartPanel";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Prayas Graphics - Premium Signboards & Display Solutions",
  description: "High-quality custom signboards, LED letters, ACP boards, and display advertising solutions. Elevate your brand's presence today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bricolageGrotesque.variable} ${inter.variable} font-sans antialiased text-zinc-950 bg-stone-50`}
      >
        <CartProvider>
          <Navbar />
          {children}
          <CartPanel />
        </CartProvider>
      </body>
    </html>
  );
}
