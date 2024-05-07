import React from "react";
import SearchInput from "./SearchBar";
import { Link } from "react-router-dom";
import CategoryList from "./HeaderLinks";
const SearchHeader = () => {
  return (
    <header className="bg-fixed z-10 mb-12">
      <nav className="flex  w-full bg-white padding-x  justify-around py-6 px-10 items-center ">
        <Link to="/client/home">
          <h1 className="text-4xl font-bold font-Palanquin md:text-2xl ">
            SouqKantra
          </h1>
        </Link>
        <SearchInput />
        <div className="flex gap-4 ">
          <Link to="/client/search">
            <img src="../../public/icons/img_rewind.svg" />{" "}
          </Link>

          <Link className="inline-block text-sm" to="/client/cart">
            <img src="../../public/icons/bag.svg" />
            <span>(0)</span>{" "}
          </Link>
          <Link to="/client/profile">
            <img src="../../public/icons/img_lock.svg" />
          </Link>
        </div>
      </nav>
      <CategoryList className="" />
    </header>
  );
};

export default SearchHeader;
