import { createTheme as createMuiTheme, useMediaQuery } from "@mui/material";
import { createPalette } from "./create-palette";
import { createTypography } from "./create-typography";
import { createShadows } from "./create-shadows";

  const palette = createPalette();
  const typography = createTypography();

  const shadows = createShadows();

  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1440,
      },
    },
    shape: {
      borderRadius: 6,
    },
    palette,
    typography,
    shadows,
    components: {
      MuiAlert: {
        styleOverrides: {
          standardError: {
            // backgroundColor: 'red',
            // color: 'white'
          },
        }
      },
    }
  });
export default theme;