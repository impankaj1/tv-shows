import { useEffect, useState } from "react";
import SearchBar from "../Components/SearchBar";
import ShowCard from "../Components/ShowCard";
import { fetchShows } from "../api";
import { Shows } from "../models/Shows";

function ShowListPage() {
  const [query, setQuery] = useState("");
  const [shows, setShows] = useState<Shows[]>([]);

  useEffect(() => {
    fetchShows(query).then((shows) => setShows(shows));
  }, [query]);

  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(event: any) => setQuery(event.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {shows && shows.map((s) => <ShowCard show={s} />)}
      </div>
    </div>
  );
}

export default ShowListPage;
