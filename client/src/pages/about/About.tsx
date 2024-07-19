import { Box, Container, Grid, Typography } from "@mui/material";

const About = () => {
  return (
    <>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
        variant="h4"
      >
        About Us
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          paddingX: { xs: "20px", md: "100px" },
          textAlign: "justify",
        }}
      >
        <Grid item xs={12} md={6} sx={{ padding: { xs: "0", md: "10px" } }}>
          <Typography>
            At Inerstech, we're all about helping you learn the tech skills you
            need to succeed. Whether you're interested in web development,
            programming, data science, or cybersecurity, we've got you covered
            with courses designed by experts. Our hands-on projects and
            supportive community make learning fun and effective. Join us at
            Inerstech and take the next step in your tech journey!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="../../../public/assets/Web-Development.jpg"
            alt="Web Development"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "1rem", // Rounded corners
            }}
          />
        </Grid>
      </Grid>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        asb,jnm
      </Typography>
    </>
  );
};

export default About;
