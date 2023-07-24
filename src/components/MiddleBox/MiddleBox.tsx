import { Box, Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import ShortLinkInput from "./ShortLinkInput";
import copy from "copy-to-clipboard";
import shorten from "../../utils/fetchShortUrl";

const MiddleBox = () => {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [urlCopy, setUrlCopy] = useState("short/link/example");

  const handleClickCopyUrl = () => {
    setCopied(true);
    copy(urlCopy);
  };

  const handleChangeCopyUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlCopy(event.target.value);
  };

  const handleGenerate = async() => {
    const short = await shorten(url, null);
    setUrlCopy(`http://localhost:5000/${short}`)
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
            backgroundColor: "#fff",
          }}
        />
        <TextField
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => setUrl(event.target.value)}
          id="outlined-basic1"
          variant="outlined"
          placeholder="Enter or copy a link"
          sx={{
            minWidth: "75%",
          }}
          autoFocus
          required
        />
        <Button
          onClick={handleGenerate}
          variant="contained"
          sx={{ color: "#fff" }}
        >
          Generate
        </Button>
        <ShortLinkInput
          copied={copied}
          handleClickCopyUrl={handleClickCopyUrl}
          urlCopy={urlCopy}
          handleChangeCopyUrl={handleChangeCopyUrl}
        />
      </Box>
    </Container>
  );
};

export default MiddleBox;
