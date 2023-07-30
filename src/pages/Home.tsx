import React from "react";
import LongUrlInput from "../components/Inputs/LongUrlInput";
import ShortLinkInput from "../components/Inputs/ShortLinkInput";
import MiddleBox from "../components/MiddleBox/MiddleBox";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import saveLocalStorage from "../utils/saveLocalStorage";

const Home = () => {
  const [longUrl, setlongUrl] = React.useState("");
  const [shortLink, setshortLink] = React.useState("short/link/example");
  const [readOnly, setReadOnly] = React.useState(true);
  const [copied, setCopied] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => setCopied(false), 3000);
  });

  const handleClickSave = () => {
    const data = { full: longUrl, short: shortLink };
    saveLocalStorage(data);
  };

  return (
    <>
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
