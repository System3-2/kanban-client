"use client";
import {
  Typography,
  Box,
  Unstable_Grid2 as Grid,
  Link,
  Theme,
  useMediaQuery,
} from "@mui/material";

export const AuthLayout = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );
  return (
    <>
      {!isMobile && (
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: "center",
            background:
              "radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            "& img": {
              maxWidth: "100%",
            },
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: "24px",
                lineHeight: "32px",
                mb: 1,
              }}
              variant="h1"
            >
              Welcome to{" "}
              <Box component="a" sx={{ color: "primary.main" }} target="_blank">
                Kanban
              </Box>
            </Typography>
            <Typography align="center" sx={{ mb: 3 }} variant="subtitle1">
              Project Management for teams and individuals
            </Typography>
            <img alt="" src="/assets/auth-illustration.svg" />
          </Box>
        </Grid>
      )}
    </>
  );
};
