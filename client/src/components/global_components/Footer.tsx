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
                    <AddIcCallIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="+977 9813990060" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary="Gwarko,Lalitpur" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <EmailIcon style={{ color: "white" }} />
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
            mt: "10px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              textDecoration: "underline",

              letterSpacing: "3px",
            }}
          >
            Useful Links
          </Typography>
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
            justifyContent: "center",
            flexWrap: "wrap",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography sx={{ display: "flex ", justifyContent: "center" }}>
            Our Social / Media Handle
          </Typography>
          <List
            sx={{
              width: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <ListItem disablePadding sx={{ width: "50px" }}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <YouTubeIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem disablePadding sx={{ width: "50px" }}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <InstagramIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem disablePadding sx={{ width: "50px" }}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <XIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem disablePadding sx={{ width: "50px" }}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <FacebookIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem disablePadding sx={{ width: "50px" }}>
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                <LinkedInIcon />
              </ListItemIcon>
            </ListItem>
          </List>
          <Typography sx={{ marginTop: "10px" }}>Follow Us</Typography>
        </Grid>
      </Grid>
      <Typography sx={{ display: "flex", justifyContent: "center", pt: "5px" }}>
        Copyright clam @2024
      </Typography>
    </Box>
  );
};

export default Footer;
