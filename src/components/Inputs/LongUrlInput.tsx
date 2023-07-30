import React from "react";
import { Button, TextField } from "@mui/material";
import shorten from "../../utils/fetchShortUrl";

type AppProps = {
  name: string;
  longUrl: string;
  setlongUrl: React.Dispatch<React.SetStateAction<string>>;
  setshortLink: React.Dispatch<React.SetStateAction<string>>;
};

const LongUrlInput = ({
  name,
  longUrl,
  setlongUrl,
  setshortLink,
}: AppProps) => {
  const handleGenerate = async () => {
    const short = await shorten(longUrl, null);
    setshortLink(process.env.REACT_APP_SERVER_DEV + "/" + short);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setlongUrl(event.target.value);
  return (
    <>
      <TextField
        value={longUrl}
        name={name}
        onChange={handleChange}
        id="outlined-basic1"
        variant="outlined"
        placeholder="Enter or copy a link"
        sx={{
          minWidth: "75%",
          margin: "2rem 0",
        }}
        autoFocus
        required
      />
      <Button
        onClick={handleGenerate}
        variant="contained"
        sx={{ color: "#fff" }}
        type="button"
      >
        Generate
      </Button>
    </>
  );
};

export default LongUrlInput;
