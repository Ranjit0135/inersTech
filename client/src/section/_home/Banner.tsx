import Box from "@mui/material/Box";

import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("../../../public/assets/ecommerce-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <InputBase
        sx={{
          width: "60%",
          top: "112px",
          borderRadius: "70px",
          height: "50px",
          background: "white",
          padding: "0 2.5rem",
          "& .MuiInputBase-input": {
            color: "black",
            backgroundColor: "white",
            padding: "0.5rem 1rem",
          },
        }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        startAdornment={
          <SearchIcon
            sx={{
              color: "black",
              position: "absolute",
              left: "0.5rem",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          />
        }
      />
    </Box>
  );
};

export default Banner;
