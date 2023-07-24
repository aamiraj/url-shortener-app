import axios from "axios";

const shorten = async (url: string, email: string|null) => {
  let endpoint =`http://localhost:5000/api/v1/short-url/shorten`;
  let linkRequest = {
    full: url,
    email: email,
  };
  let apiResponse = await axios.post(endpoint, linkRequest);
  let link = await apiResponse.data.data.short;
  return link;
};

export default shorten;
// let shortUrl = shorten(
//   "https://www.youtube.com/channel/UCHK4HD0ltu1-I212icLPt3g"
// );
// console.log(shortUrl);
