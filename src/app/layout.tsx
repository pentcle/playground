import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const berkeleyRegular = localFont({
  src: "./fonts/BerkeleyMono-Regular.woff",
  variable: "--font-berkeley-mono-regular",
  weight: "100 900",
});
const berkeleyBold = localFont({
  src: "./fonts/BerkeleyMono-Bold.woff",
  variable: "--font-berkeley-mono-bold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "pentacle",
  description: "creative direction and product design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${berkeleyRegular.variable} ${berkeleyBold.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
