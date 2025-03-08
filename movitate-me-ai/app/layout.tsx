import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Movitate Me - AI",
  description: "AI-powered motivation generator",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
