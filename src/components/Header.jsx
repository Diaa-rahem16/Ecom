import CategoryList from "./Header/HeaderLinks";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="client-nav">
      <nav>
        <ul className="right">
          <li>
            <Link to="/client/help">help</Link>
          </li>
          <li>
            <Link to="/client/about-us">About</Link>
          </li>
          <li>
            <Link to="/client/comparator">Comparator</Link>
          </li>
        </ul>
        <Link to='/client/home' className="logo">
          SouqKantra
        </Link>
        <ul className="left">
        <li><Link to="/client/search"><img src="../../public/icons/img_rewind.svg"/></Link></li>
          <li><Link to="/client/cart"><img src="../../public/icons/bag.svg"/></Link></li>
          <li><Link to="/client/profile"><img src="../../public/icons/img_lock.svg"/></Link></li>
        </ul>
      </nav>
      <CategoryList />
      <div className="w-full h-8 text-text font-bold bg-primary flex justify-center items-center leading-tight">
        <p>free shipping on all orders over 10000DA</p>
      </div>
    </header>
  );
};

export default Header;
