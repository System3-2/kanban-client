"use client";
import React from "react";
import { useState, useCallback, useContext } from "react";
import {
  Button,
  Stack,
  Tabs,
  Tab,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Box,
  Link,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useSnackbar } from "notistack";

export const LoginForm = () => {
  const [method, setMethod] = useState("email");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const handleMethodChange = useCallback((_: any, value: string) => {
    setMethod(value);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .required("email is required")
        .typeError("value must be a type of email"),
      password: Yup.string().required(),
    }),
    onSubmit: async (values) => {
      const status = await signIn("credentials", {
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (status?.error) {
        alert("Something went wrong");
      }
      if (!status?.ok) {
        console.log("not ok");
      }
    },
  });

  return (
    <>
      <Box
        sx={{
          flex: "1 1 auto",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: "100px",
            width: "100%",
          }}
        >
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4">Login</Typography>
            <Typography color="text.secondary" variant="body2">
              Don&apos;t have an account? &nbsp;
              <Link
                // component={NextLink}
                href="/auth/signup"
                underline="hover"
                variant="subtitle2"
              >
                Register
              </Link>
            </Typography>
          </Stack>

          <Tabs sx={{ mb: 3 }} value={method} onChange={handleMethodChange}>
            <Tab label="Email" value="email" />
          </Tabs>
          {method === "email" && (
            <>
              <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                  <TextField
                    error={!!(formik.touched.email && formik.errors.email)}
                    fullWidth
                    helperText={formik.touched.email && formik.errors.email}
                    label="Email Address"
                    name="email"
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type="email"
                  />
                  <TextField
                    error={
                      !!(formik.touched.password && formik.errors.password)
                    }
                    fullWidth
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    label="Password"
                    name="password"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    type={showPassword ? "text" : "password"}
                    value={formik.values.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Stack>
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
              </form>
            </>
          )}
        </Box>
      </Box>
    </>
  );
};
