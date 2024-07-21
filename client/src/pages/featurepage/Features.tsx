import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

const Features = () => {
  return (
    <Container className="mt-20 border rounded-xl border-gray h-[80vh]">
      <Box>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          Features
        </Typography>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 350 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Study Guide
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ minWidth: 350 }}>
              <CardContent>
                <Typography
                  sx={{
                    fontSize: 14,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  color="text.secondary"
                  gutterBottom
                >
                  Study Guide
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Features;
