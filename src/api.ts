import axios from "axios";
import { Shows } from "./models/Shows";

export const fetchShows = (keyword: string) => {
  return axios
    .get<{ show: Shows }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
    .then((response) => response.data.map((s) => s.show));
};
