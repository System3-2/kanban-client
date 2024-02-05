'use client';
import { styled } from "@mui/material/styles";



export const sizes = {
  appNavBarLeftWidth: 64,
  secondarySideBarWidth: 230,
  minViewportWidth: 1000,
};

const paddingLeft = sizes.appNavBarLeftWidth + sizes.secondarySideBarWidth + 40;

export const ProjectPage = styled("div")(({ theme }) => ({
  padding: `25px 32px 50px ${paddingLeft}`,
  backgrounColor: theme.palette.error,

  [theme.breakpoints.up("lg")]: {
    padding: `25px 20px 50px ${paddingLeft - 20}`,
  },

  [theme.breakpoints.up("md")]: {
    padding: `${paddingLeft - 20 - sizes.secondarySideBarWidth}`,
  },
}));
