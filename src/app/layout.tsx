import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Selendra Mini",
  description: "Every you need in Selendra Mini App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geistMono.className}>
        <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
