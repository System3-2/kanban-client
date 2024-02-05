"use client";
import { Box, Theme } from "@mui/material";
import { ProjectSidebarLeft } from "@/components/leftSidebar";
import { Sidebar } from "@/components/sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export default async function Shell({ children }: Props) {
  return (
    <>
      <Box
        sx={(theme: Theme) => ({
          padding: `20px 32px 50px 284px`,

          [theme.breakpoints.up("lg")]: {
            padding: `20px 20px 50px 264px`,
          },
          [theme.breakpoints.down("md")]: {
            padding: `20px 20px 50px 250px`,
          },
        })}
      >
        <ProjectSidebarLeft />
        <Sidebar />
        {children}
      </Box>
    </>
  );
}
