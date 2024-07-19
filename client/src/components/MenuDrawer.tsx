import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Pages = [
  "products",
  "services",
  "aboutUs",
  "contactUs",
  "login",
  "logout",
];
const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="img"
            src="/assets/Untitled design (15).png"
            alt="Logo"
            sx={{ height: 100, width: 100, padding: 1 }}
          />
          {Pages.map((page, index) => (
            <ListItemButton
              onClick={() => setOpenDrawer(false)}
              key={index}
              sx={{
                width: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "1px solid brown",
                margin: "5px",
              }}
            >
              <ListItemIcon>
                <ListItemText
                  sx={{
                    letterSpacing: "5px",
                    "& .MuiListItemText-primary": {
                      letterSpacing: "2px", // Adjust the value to control the spacing
                    },
                  }}
                >
                  {page}
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon sx={{ fontSize: 35 }} />
      </IconButton>
    </>
  );
};

export default MenuDrawer;
