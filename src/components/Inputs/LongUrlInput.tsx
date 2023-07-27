import React from "react";
import { Button, TextField } from "@mui/material";
import shorten from "../../utils/fetchShortUrl";

type AppProps = {
  setUrlCopy: React.Dispatch<React.SetStateAction<string>>;
};

const LongUrlInput = ({ setUrlCopy }: AppProps) => {
  const [url, setUrl] = React.useState("");

  const handleGenerate = async () => {
    const short = await shorten(url, null);
    setUrlCopy(process.env.REACT_APP_SERVER_DEV + "/" + short);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setUrl(event.target.value);
  return (
    <>
      <TextField
        onChange={handleChange}
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
    </>
  );
};

export default LongUrlInput;
