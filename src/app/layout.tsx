import ThemeRegistry from "@/theme/ThemeRegistery";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin", "cyrillic", "latin-ext", "vietnamese"],
});

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
        <body className={roboto.className}>
          <ThemeRegistry options={{ key: "mui" }}>{children}</ThemeRegistry>
        </body>
      </html>
    </>
  );
}
