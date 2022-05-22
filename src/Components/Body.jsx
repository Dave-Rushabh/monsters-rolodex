import { useState } from "react";
import MonstersCard from "./MonstersCard";
import SearchBar from "./SearchBar";

const Body = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <MonstersCard search={search} />
    </>
  );
};

export default Body;
