import Axios from "axios";

export const client = Axios.create();

client.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1/";
