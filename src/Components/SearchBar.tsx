import { useState } from "react";
import { BsSearch } from "react-icons/bs";

interface props {
  onChange: any;
  value: string;
}

function SearchBar(props: props) {
  const { onChange, value } = props;
  return (
    <div className="relative">
      <input
        className="px-2 py-1 w-full rounded-full border border-black"
        type="text"
        placeholder="Search"
        onChange={onChange}
        value={value}
      />
      <BsSearch className="absolute right-4 top-1/2 -translate-y-1/2" />
    </div>
  );
}

export default SearchBar;
