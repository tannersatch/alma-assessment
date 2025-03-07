import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VISA Assessment",
  description: "Get an assessment of your immigration case",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
