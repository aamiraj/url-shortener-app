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
import { useLocation } from "react-router-dom";

type AppProps = {
  copied: boolean;
  handleClickCopyUrl: () => void;
  urlCopy: string;
  handleChangeCopyUrl: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const ShortLinkInput = ({
  copied,
  handleClickCopyUrl,
  urlCopy,
  handleChangeCopyUrl,
}: AppProps) => {
  const { pathname } = useLocation();

  return (
    <>
      <FormControl
        sx={{
          minWidth: "75%",
          margin: "2rem 0"
        }}
        variant="outlined"
      >
        <InputLabel htmlFor="outlined-basic2">
          Your short is link here
        </InputLabel>
        <OutlinedInput
          readOnly={!(pathname === "/edit-url")}
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
