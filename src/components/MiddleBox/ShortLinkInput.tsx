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

interface AppProps {
  copied: boolean;
  handleClickCopyUrl: () => void;
  urlCopy: string;
  handleChangeCopyUrl: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ShortLinkInput = ({
  copied,
  handleClickCopyUrl,
  urlCopy,
  handleChangeCopyUrl,
}: AppProps) => {
  return (
    <>
      <FormControl
        sx={{
          minWidth: "75%",
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-basic2">
          Your short is link here
        </InputLabel>
        <OutlinedInput
          id="outlined-basic2"
          type="text"
          label="Your short link here"
          onChange={handleChangeCopyUrl}
          value={urlCopy}
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
