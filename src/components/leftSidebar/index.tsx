"use client";
import {
  Theme,
  styled,
  Box,
  MenuItem,
  MenuList,
  Typography,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import Logo from "../logo";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import HelpIcon from "@mui/icons-material/Help";

export const ProjectSidebarLeft = () => {
  //TODO: Recieve modal props

  return (
    <>
      <Box
        component={"aside"}
        sx={(t: any) => ({
          backgroundColor: (theme) => theme.palette.secondary.main,
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "64px",
          overflowX: "hidden",
          transition: "all .1s",
          cursor: "pointer",
          userSelect: "none",
          zIndex: 100,
          ":hover": {
            width: "200px",
            marginRight: "30px",
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.6)",
          },
        })}
      >
        {/* Logo */}
        <Box
          component={Link}
          href={"/"}
          sx={{
            display: "block",
            position: "relative",
            left: 0,
            margin: "20px 0 10px",
            transition: "all .1s",
          }}
        >
          <Box
            sx={{
              marginLeft: "18px",
              cursor: "pointer",
              userSelect: "none",
              display: "inline-block",
            }}
          >
            <Logo size={28} className="" />
          </Box>
        </Box>

        <MenuList
          sx={{
            marginTop: 4,
          }}
        >
          <MenuItem
            sx={{
              width: "100%",
              position: "relative",
              height: "42px",
              color: "#deebff",
              cursor: "pointer",
              userSelect: "none",
              gap: 2,
              ":hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon>
              <SearchIcon fontSize="large" />
            </ListItemIcon>
            <Tooltip title="Search Issue" placement="right-end">
              <Typography
                variant="inherit"
                color={"#fff"}
                fontWeight={700}
                fontSize={16}
              >
                Search Issue
              </Typography>
            </Tooltip>
          </MenuItem>
          <MenuItem
            sx={{
              width: "100%",
              position: "relative",
              height: "42px",
              color: "#deebff",
              cursor: "pointer",
              userSelect: "none",
              gap: 2,
              ":hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <ListItemIcon>
              <AddIcon fontSize="large" />
            </ListItemIcon>
            <Tooltip title="Create Issue" placement="right-end">
              <Typography
                variant="inherit"
                color={"#fff"}
                fontWeight={700}
                fontSize={16}
              >
                Create Issue
              </Typography>
            </Tooltip>
          </MenuItem>
        </MenuList>

        <Box
          component={"div"}
          sx={{
            position: "absolute",
            bottom: "20px",
            width: "100%",
          }}
        >
          <MenuList>
            <MenuItem
              sx={{
                width: "100%",
                position: "relative",
                height: "42px",
                color: "#deebff",
                cursor: "pointer",
                userSelect: "none",
                gap: 2,
                ":hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              <ListItemIcon>
                <HelpIcon fontSize="large" />
              </ListItemIcon>
              <Tooltip title="About" placement="right-end">
                <Typography
                  variant="inherit"
                  color={"#fff"}
                  fontWeight={700}
                  fontSize={16}
                >
                  About
                </Typography>
              </Tooltip>
            </MenuItem>
          </MenuList>
        </Box>
      </Box>
    </>
  );
};
