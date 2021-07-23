import axios from "axios";

const KEY = "AIzaSyAdyacgTet2sWKV2KP7xWU177fB1PpgSvY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
