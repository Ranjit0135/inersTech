import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box sx={{ padding: 4, backgroundColor: "#3d251e", color: "white" }}>
      <Grid container gap={4}>
        <Grid
          item
          xs={12}
          md={3}
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
            sx={{ height: 80, width: 80, padding: 1 }}
          />
          <nav>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AddIcCallIcon />
                  </ListItemIcon>
                  <ListItemText primary="+977 9813990060" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Gwarko,Lalitpur" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="rairanjit391@gmail.com" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Contact us" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Help & feedback" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="FAQ" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            alignItems: "center",

            mt: "20px",
          }}
        >
          <Typography>Our Social / Media Handle</Typography>
          <List sx={{ display: "flex", flexWrap: "wrap" }}>
            {/* <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Our Social / Media Handles" />
              </ListItemButton>
            </ListItem> */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon color="white">
                  <YouTubeIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <InstagramIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <XIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FacebookIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LinkedInIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Typography sx={{ display: "flex", justifyContent: "center", pt: "5px" }}>
        Copyright clam @2024
      </Typography>
    </Box>
  );
};

export default Footer;
