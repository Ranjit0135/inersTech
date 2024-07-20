import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuDrawer from "../MenuDrawer";

const Pages = [, "Home", "products", "services", "aboutUs", "contactUs"];
const Navbar = () => {
  const [value, setValue] = useState(0);
  const theme = useTheme();
  console.log(theme);

  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  return (
    <>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0000", color: "black" }}
      >
        <Toolbar sx={{ marginX: 2 }}>
          <Box
            component="img"
            src="/assets/Untitled design (15).png"
            alt="Logo"
            sx={{ height: 80, width: 80, padding: 1 }}
          />
          {isMatch ? (
            <>
              <Typography></Typography> <MenuDrawer />
            </>
          ) : (
            <>
              <Tabs
                textColor="inherit"
                value={value}
                indicatorColor="secondary"
                onChange={(e, newValue) => setValue(newValue)}
                sx={{ marginLeft: "auto" }}
              >
                {Pages.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    component={Link}
                    to={`/${page}`}
                  />
                ))}
              </Tabs>
              <Box sx={{ marginLeft: 8, display: "flex", gap: 2 }}>
                <Button variant="contained" component={Link} to="/sign-up">
                  Login
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
