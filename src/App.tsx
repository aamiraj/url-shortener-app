import React from "react";
import Router from "./router/router";
import { Container } from "@mui/material";

function App() {
  return (
    <Container sx={{ maxWidth: "1536px" }}>
      <Router />
    </Container>
  );
}

export default App;
