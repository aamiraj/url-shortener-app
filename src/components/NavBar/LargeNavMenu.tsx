import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

interface Properties {
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}
const LargeNavMenu = ({ setUser }: Properties) => {
  const handleOnClick = () => {
    setUser(true);
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
