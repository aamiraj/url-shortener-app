import React from "react";
import LongUrlInput from "../components/Inputs/LongUrlInput";
import ShortLinkInput from "../components/Inputs/ShortLinkInput";
import MiddleBox from "../components/MiddleBox/MiddleBox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import saveLocalStorage from "../utils/saveLocalStorage";
import { key } from "../utils/key";
import Toast from "../components/Toast/Toast";

type AppProps = {
  long: string | undefined;
  short: string | undefined;
  read: boolean | undefined;
};

const Home = ({
  long = "",
  short = "short/link/example",
  read = true,
}: AppProps) => {
  const [longUrl, setlongUrl] = React.useState(long);
  const [shortLink, setshortLink] = React.useState(short);
  const [readOnly, setReadOnly] = React.useState(read);
  const [copied, setCopied] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => setCopied(false), 3000);
  });

  const handleClickSave = () => {
    if (longUrl.length > 0 && shortLink.length > 0) {
      const data = { full: longUrl, short: shortLink };
      saveLocalStorage(key, data);
      setOpen(true);
    }
  };

  return (
    <>
      <Toast open={open} setOpen={setOpen} message="Saved successfully" />
      <MiddleBox>
        <LongUrlInput
          name="longUrl"
          longUrl={longUrl}
          setshortLink={setshortLink}
          setlongUrl={setlongUrl}
        />
        <ShortLinkInput
          name="shortLink"
          shortLink={shortLink}
          copied={copied}
          readOnly={readOnly}
          setCopied={setCopied}
          setshortLink={setshortLink}
        />
        <Box>
          <Button
            onClick={handleClickSave}
            type="button"
            variant="contained"
            color="primary"
          >
            Save
          </Button>
          <Button
            type="button"
            variant="text"
            color="primary"
            onClick={() => setReadOnly((prev) => !prev)}
          >
            {readOnly ? "Edit" : "ReadOnly"}
          </Button>
          <Button
            type="button"
            variant="text"
            color="primary"
            onClick={() => navigate("/list-url")}
          >
            Your Links
          </Button>
        </Box>
      </MiddleBox>
    </>
  );
};

export default Home;
