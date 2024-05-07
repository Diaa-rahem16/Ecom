import React, { useState } from "react";
import optionIcon from "../../../public/icons/options.png";

const SearchInput = () => {
  const [showOptions, setShowOptions] = useState(false);
  const handleOptionClick = () => {
    setShowOptions((prevShowOptions) => !prevShowOptions);
  };

  return (
    <div className="relative pl-4 h-12 flex items-center justify-between bg-white rounded-lg overflow-hidden cursor-pointer shadow-md w-[40%] z-10">
      {" "}
      <input
        type="text"
        name="text"
        id="input"
        placeholder="Search"
        className="w-40 h-full border-none outline-none text-sm text-gray-700"
      />
      <div className="flex items-center">
        <div className="px-3 border-r border-gray-300">
          <svg viewBox="0 0 512 512" className="w-3 h-3 text-gray-700">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
          </svg>
        </div>
        <button
          onClick={handleOptionClick}
          className="p-3 h-full border-none bg-transparent cursor-pointer transition-colors duration-300 hover:bg-red-300"
        >
          <img src={optionIcon} alt="" className="h-4 w-4" />
        </button>
      </div>
      {showOptions && (
        <div className="absolute top-full left-0 mt-5 w-64 p-4 bg-white rounded shadow overflow-auto max-h-screen z-50">
          {" "}
          <select className="w-full mb-2 p-2 border rounded">
            <option>Category</option>
            {/* Add your categories here */}
          </select>
          <select className="w-full mb-2 p-2 border rounded">
            <option>Type</option>
            {/* Add your types here */}
          </select>
          <select className="w-full mb-2 p-2 border rounded">
            <option>Discount</option>
            {/* Add your discounts here */}
          </select>
          <button className="w-full p-2 bg-blue-500 text-white rounded">
            Confirm
          </button>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
