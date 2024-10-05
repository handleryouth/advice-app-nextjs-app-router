import type { Metadata } from "next";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advice App",
  description: "Get advice from the best people in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkBlue dark !min-w-[320px] !max-w-none prose prose-ul:list-none prose-img:my-0 prose-li:p-0 prose-ul:p-0">
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
