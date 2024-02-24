import type {Metadata} from "next";
import "./globals.css";
import {cn} from "@/lib/utils";
import {fontFamily} from "@/app/fontFamily";

export const metadata: Metadata = {
  title: "Headless-Forms",
  description: "Headless forms endpoints.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontFamily.variable
      )}>{children}</body>
    </html>
  );
}
