import React from "react";
import Shell from "@/components/shell";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kanban | Dashboard",
  description: "Dashboard",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Shell>{children}</Shell>
    </>
  );
}
