import axios from "axios";

const api = axios.create({
  baseURL: "http://200.236.3.126:3000/scoreboards/20200141",
});

export default api;
