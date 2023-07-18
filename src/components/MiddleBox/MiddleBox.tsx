import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShortLinkInput from "./ShortLinkInput";

const MiddleBox = () => {
  const [copied, setCopied] = useState(false);
  const handleClickCopyUrl = () => {
    setCopied(true);
  };
  useEffect(() => {
    setTimeout(() => setCopied(false), 3000);
  });
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
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "secondary.main",
            filter: "blur(8px)",
            opacity: 0.5,
          }}
        />
        <TextField
          id="outlined-basic1"
          variant="outlined"
          placeholder="Enter or copy a link"
          sx={{
            minWidth: "75%",
          }}
          autoFocus
          required
        />
        <Button variant="contained" sx={{ color: "#fff" }}>
          Generate
        </Button>
        <ShortLinkInput
          copied={copied}
          handleClickCopyUrl={handleClickCopyUrl}
        />
      </Box>
    </Container>
  );
};

export default MiddleBox;
