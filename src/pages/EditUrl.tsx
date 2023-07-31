import React from "react";
import Home from "./Home";
import { useParams } from "react-router-dom";
import loadLocalStorage from "../utils/loadLocalStorage";
import { key } from "../utils/key";
type Data = {
  full: string;
  short: string;
  sl: string;
};
const EditUrl = () => {
  const [links] = React.useState<Data[]>(loadLocalStorage(key));
  const { id } = useParams();
  const foundLink = links.find((link) => link.sl === id);

  console.log(foundLink);
  return (
    <>
      <Home long={foundLink?.full} short={foundLink?.short} read={true} />
    </>
  );
};

export default EditUrl;
