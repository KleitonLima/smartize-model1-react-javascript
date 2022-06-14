import axios from "axios";

const api = axios.create({ baseURL: "https://api-loja-smartize.herokuapp.com" });

export default api;
