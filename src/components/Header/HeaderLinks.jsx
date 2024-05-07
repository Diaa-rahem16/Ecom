import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const categories = [
  {
    name: "Electronics",
    miniCategories: [
      { link: "#", label: "Computers & Tablets" },
      { link: "#", label: "Cell Phones" },
      { link: "#", label: "TV & Home Theater" },
      { link: "#", label: "Video Games & Consoles" },
    ],
  },
  {
    name: "Accessories",
    miniCategories: [
      { link: "#", label: "Watches" },
      { link: "#", label: "Jewelry" },
      { link: "#", label: "Handbags & Wallets" },
      { link: "#", label: "Sunglasses" },
    ],
  },
  {
    name: "Clothes",
    miniCategories: [
      { link: "#", label: "Men's Clothing" },
      { link: "#", label: "Women's Clothing" },
      { link: "#", label: "Kid's Clothing" },
      { link: "#", label: "Shoes" },
    ],
  },
  {
    name: "Kitchen",
    miniCategories: [
      { link: "#", label: "Cookware" },
      { link: "#", label: "Small Appliances" },
      { link: "#", label: "Kitchen Utensils & Gadgets" },
      { link: "#", label: "Dinnerware" },
    ],
  },
  {
    name: "Gaming",
    miniCategories: [
      { link: "#", label: "Video Games" },
      { link: "#", label: "Gaming Consoles" },
      { link: "#", label: "Gaming Accessories" },
      { link: "#", label: "PC Gaming" },
    ],
  },
  {
    name: "Home Garden",
    miniCategories: [
      { link: "#", label: "Furniture" },
      { link: "#", label: "Decor" },
      { link: "#", label: "Gardening Supplies" },
      { link: "#", label: "Outdoor Living" },
    ],
  },
  {
    name: "Books",
    miniCategories: [
      { link: "#", label: "Fiction" },
      { link: "#", label: "Non-fiction" },
      { link: "#", label: "Children's Books" },
      { link: "#", label: "Textbooks" },
    ],
  },
  {
    name: "Sports",
    miniCategories: [
      { link: "#", label: "Exercise & Fitness" },
      { link: "#", label: "Outdoor Recreation" },
      { link: "#", label: "Sports Gear" },
      { link: "#", label: "Fan Shop" },
    ],
  },
  {
    name: "Automotive",
    miniCategories: [
      { link: "#", label: "Car Parts" },
      { link: "#", label: "Car Accessories" },
      { link: "#", label: "Motorcycles & ATVs" },
      { link: "#", label: "Tires & Wheels" },
    ],
  },
  {
    name: "Health",
    miniCategories: [
      { link: "#", label: "Makeup" },
      { link: "#", label: "Skin Care" },
      { link: "#", label: "Hair Care" },
      { link: "#", label: "Personal Care" },
    ],
  },
  {
    name: "Toys & Games",
    miniCategories: [
      { link: "#", label: "Action Figures" },
      { link: "#", label: "Board Games" },
      { link: "#", label: "Dolls & Plush" },
      { link: "#", label: "Educational Toys" },
    ],
  },
];
function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ul className="flex  text-accent bg-gray-200  md:flex-row gap-2 md:gap-0 md:justify-center md:items-center md:flex-wrap sm:hidden">
      {categories.map((category, index) => (
        <li
          key={index}
          className=" relative md:text-[12px] items-center flex-grow border-l-[0.1px] border-solid border-blue_gray-500 p-[15px] md:p-5 text-md font-medium text-[13px] sm:flex-wrap overflow-visible"
        >
          <div
            className="flex cursor-pointer"
            onClick={() =>
              setSelectedCategory(selectedCategory === index ? -1 : index)
            }
          >
            <p className="flex justify-center items-center gap-2 md:text-[12px]">
              {category.name}{" "}
              <span
                className={
                  selectedCategory === index ? "transform rotate-180" : ""
                }
              >
                <FaChevronDown />
              </span>
            </p>
          </div>
          {selectedCategory === index && (
            <ul className="absolute left-0 md:block bg-white w-full mt-2 rounded-md shadow-lg z-10">
              {category.miniCategories.map((miniCategory, miniIndex) => (
                <li key={miniIndex} className="border-b  border-gray-200">
                  <a
                    href={miniCategory.link}
                    className="block p-3 hover:bg-gray-100 transition-colors"
                  >
                    {miniCategory.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
