import React from "react";
import {
  IconButton,
  InputAdornment,
  OutlinedInput,
  InputLabel,
  FormControl,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import copy from "copy-to-clipboard";

type AppProps = {
  name: string;
  shortLink: string;
  copied: boolean;
  readOnly: boolean;
  setCopied: React.Dispatch<React.SetStateAction<boolean>>;
  setshortLink: React.Dispatch<React.SetStateAction<string>>;
};

const ShortLinkInput = ({
  name,
  shortLink,
  copied,
  readOnly,
  setCopied,
  setshortLink,
}: AppProps) => {
  const handleClickCopyUrl = () => {
    setCopied(true);
    copy(shortLink);
  };

  const handleChangeCopyUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setshortLink(event.target.value);
  };
  return (
    <>
      <FormControl
        sx={{
          minWidth: "75%",
          margin: "2rem 0",
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-basic2">
          Your short is link here
        </InputLabel>
        <OutlinedInput
          readOnly={readOnly}
          id="outlined-basic2"
          type="text"
          label="Your short link here"
          onChange={handleChangeCopyUrl}
          value={shortLink}
          name={name}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickCopyUrl}
                edge="end"
              >
                {copied ? <CheckIcon /> : <ContentCopyIcon />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </>
  );
};

export default ShortLinkInput;
