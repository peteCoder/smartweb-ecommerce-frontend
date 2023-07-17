import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({ weight: "300", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Ecommerce store",
  description: "Ecommerce app",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
