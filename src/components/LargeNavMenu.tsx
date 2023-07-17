import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const LargeNavMenu = ({ pages }: any) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 0,
          display: { xs: "none", md: "flex" },
          gap: "2rem",
        }}
      >
        {pages.map((page: any) => (
          <Button
            key={page}
            variant="contained"
            sx={{ my: 2, color: "white", display: "block" }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};

export default LargeNavMenu;
