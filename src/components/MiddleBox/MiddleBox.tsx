import { Box, Container } from "@mui/material";
import React from "react";

type AppProps = { children: React.ReactNode };

const MiddleBox = ({ children }: AppProps) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "75vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          minWidth: { xs: "100%", sm: 580 },
          height: { xs: "100%", sm: 363 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

export default MiddleBox;
