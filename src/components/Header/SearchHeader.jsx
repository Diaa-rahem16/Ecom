import React from "react";
import SearchInput from "./SearchBar";
import { Link } from "react-router-dom";
import CategoryList from "./HeaderLinks";
const SearchHeader = () => {
  return (
    <header className="bg-fixed z-10 mb-12">
      <nav className="flex  w-full bg-white padding-x  justify-around py-6 px-10 items-center ">
        <Link to="/home">
          <h1 className="text-4xl font-bold font-Palanquin md:text-2xl ">
            SouqKantra
          </h1>
        </Link>
        <SearchInput />
        <div className="flex gap-4 ">
          <a href="">
            <img src="../../public/icons/img_rewind.svg" />{" "}
          </a>

          <a className="inline-block text-sm" href="">
            <img src="../../public/icons/bag.svg" />
            <span>(0)</span>{" "}
          </a>
          <a href="">
            <img src="../../public/icons/img_lock.svg" />
          </a>
        </div>
      </nav>
      <CategoryList className="" />
    </header>
  );
};

export default SearchHeader;
