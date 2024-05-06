import CategoryList from "./Header/HeaderLinks";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" bg-fixed">
      <nav className="flex  w-full bg-white padding-x  justify-around py-6 px-10 items-center">
        <ul className="flex gap-10 text-lg font-medium md:text-[12px]">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Comprator">Comprator</Link>
          </li>
        </ul>
        <h1 className="text-4xl font-bold font-Palanquin md:text-2xl ">
          SouqKantra
        </h1>
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
      <CategoryList />
      <div className="w-full h-8 text-gray-300 bg-primaryClr-900 flex justify-center items-center leading-tight">
        <p>free shipping on all orders over 10000DA</p>
      </div>
    </header>
  );
};

export default Header;
