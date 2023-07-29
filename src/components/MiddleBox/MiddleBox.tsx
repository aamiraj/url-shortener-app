import { Paper, Container } from "@mui/material";
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
      <Paper
        sx={{
          minWidth: { xs: "100%", sm: 580 },
          height: { xs: "100%", sm: 450 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
          border: "1px solid #d0d0d0" ,
          borderRadius: "8px"
        }}
      >
        {children}
      </Paper>
    </Container>
  );
};

export default MiddleBox;
