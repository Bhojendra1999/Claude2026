import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import "./globals.css";

const gabarito = Gabarito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-gabarito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EcoClean - Professional Eco-Friendly Cleaning Services",
  description: "Professional eco-friendly cleaning services for homes and offices. We use natural, non-toxic products that are safe for your family, pets, and the environment.",
  keywords: ["eco-friendly cleaning", "green cleaning", "natural cleaning", "house cleaning", "professional cleaners", "sustainable cleaning", "EcoClean"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={gabarito.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
