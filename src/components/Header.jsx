import CategoryList from "./Header/HeaderLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className=" bg-fixed text-text ">
      <nav className="flex  w-full bg-white padding-x  justify-around py-6 px-10 items-center">
        <Link to="/home">
          <h1 className="text-4xl font-bold font-Palanquin md:text-2xl text-primary ">
            SouqKantra
          </h1>
        </Link>
        <ul className="flex gap-10 text-text text-lg font-medium md:text-[12px] justify-center items-center">
          <li className="">
            <Link
              className="bg-secondary text-white font-bold rounded-full px-8 py-2 hover:opacity-90 ease-500"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/Comprator">Comprator</Link>
          </li>
        </ul>

        <div className="flex gap-4 ">
          <Link to="/home/search">
            <img src="../../public/icons/img_rewind.svg" />{" "}
          </Link>

          <a className="inline-block text-sm" href="">
            <img src="../../public/icons/bag.svg" />
            <span>(0)</span>{" "}
          </a>
          <Link to="/home/profile">
            <img src="../../public/icons/img_lock.svg" />
          </Link>
        </div>
      </nav>
      <CategoryList />
      <div className="w-full h-8 text-text font-bold bg-primary flex justify-center items-center leading-tight">
        <p>free shipping on all orders over 10000DA</p>
      </div>
    </header>
  );
};

export default Header;
