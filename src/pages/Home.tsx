import React from "react";
import LongUrlInput from "../components/Inputs/LongUrlInput";
import ShortLinkInput from "../components/Inputs/ShortLinkInput";
import MiddleBox from "../components/MiddleBox/MiddleBox";
import copy from "copy-to-clipboard";

const Home = () => {
  const [copied, setCopied] = React.useState(false);
  const [urlCopy, setUrlCopy] = React.useState("short/link/example");

  React.useEffect(() => {
    setTimeout(() => setCopied(false), 3000);
  });

  const handleClickCopyUrl = () => {
    setCopied(true);
    copy(urlCopy);
  };

  const handleChangeCopyUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrlCopy(event.target.value);
  };
  return (
    <>
      <MiddleBox>
        <LongUrlInput setUrlCopy={setUrlCopy} />
        <ShortLinkInput
          copied={copied}
          handleClickCopyUrl={handleClickCopyUrl}
          urlCopy={urlCopy}
          handleChangeCopyUrl={handleChangeCopyUrl}
        />
      </MiddleBox>
    </>
  );
};

export default Home;
