import ThemeRegistry from "@/theme/ThemeRegistery";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kanban | Home",
  description: "Project management tool for teams and individuals",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <html lang="en">
        <body className={inter.className}>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </body>
      </html>
    </>
  );
}
