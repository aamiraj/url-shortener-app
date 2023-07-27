import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const LargeNavMenu = () => {
  const navigate = useNavigate()

  const handleOnClick = () => {
    navigate("/sign-in")
  };
  return (
    <>
      <Box
        sx={{
          flexGrow: 0,
          display: { xs: "none", md: "flex" },
          gap: "2rem",
          order: 2,
        }}
      >
        <Button
          onClick={() => console.log("sign in with google...")}
          variant="contained"
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Sign In With Google
        </Button>
        <Button
          variant="contained"
          sx={{ my: 2, color: "white", display: "block" }}
          onClick={handleOnClick}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default LargeNavMenu;
