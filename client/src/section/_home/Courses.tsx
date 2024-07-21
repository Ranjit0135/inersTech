import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  Stack,
  Typography,
} from "@mui/material";

const Courses = () => {
  return (
    <div className="mt-24 border bg-zinc-50">
      <Grid container justifyContent="center" spacing={4} padding={2}>
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: {
              sm: "50px",
            },
          }}
        >
          <Stack spacing={1}>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                letterSpacing: "3px",
              }}
            >
              Courses
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              fontSize={14}
            >
              Learn now!
            </Typography>
            <Button size="small">Enroll Now</Button>
          </Stack>
        </Grid>

        <Grid
          item
          xs={12}
          sm={9}
          md={9}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              width: {
                md: "80%",
              },
            }}
          >
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined">
              <Button>Submit</Button>
            </ButtonGroup>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Courses;
