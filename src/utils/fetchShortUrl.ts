import axios from "axios";

const shorten = async (url: string, email: string | null) => {
  let endpoint = process.env.REACT_APP_SERVER_DEV + `/api/v1/short-url/shorten`;
  let linkRequest = {
    full: url,
    email: email,
  };
  let apiResponse = await axios.post(endpoint, linkRequest);
  let link = await apiResponse.data.data.short;
  return link;
};

export default shorten;
