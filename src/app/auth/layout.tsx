import React from "react";
import type { Metadata } from "next";
import {
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Link,
} from "@mui/material";
import { AuthLayout } from "@/components/auth/layout";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Kanban | Auth",
  description: "Authentication",
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Box
        component="main"
        sx={{
          display: "flex",
          flex: "1 1 auto",
        }}
      >
        <Grid container sx={{ flex: "1 1 auto" }}>
          <Grid
            xs={12}
            lg={6}
            sx={{
              backgroundColor: "background.paper",
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            <Box
              component="header"
              sx={{
                left: 0,
                p: 3,
                position: "fixed",
                top: 0,
                width: "100%",
              }}
            >
              <Link
                href="/"
                sx={{
                  display: "inline-flex",
                  height: 32,
                  width: 32,
                }}
              >
                <Typography>Logo</Typography>
              </Link>
            </Box>
            {children}
          </Grid>
         {/*  Layout component*/} 
         <AuthLayout />
        </Grid>
      </Box>
    </div>
  );
};

export default Layout;
