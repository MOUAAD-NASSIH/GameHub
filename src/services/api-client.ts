import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4336fd15cd0a47e09c0ef745bde5d239",
  },
});
