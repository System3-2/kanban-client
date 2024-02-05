import { Typography, Link, Breadcrumbs, Container } from "@mui/material";
import { Flame } from "lucide-react";

export const BreadCrumb = () => {
  return (
    <Container>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">
          <Flame  color="red" size={20} style={{ marginTop: 2}}/>
          Breadcrumbs
        </Typography>
      </Breadcrumbs>
    </Container>
  );
};
