import CategoryList from "./Header/HeaderLinks";
import { Link } from "react-router-dom";

const SellerFirstNav = () => {
  return (
    <header id="seller-first-nav">
      <nav>
        <ul className="right">
          <li>
            <Link to="/seller/help">help</Link>
          </li>
          <li>
            <Link to="/seller/about-us">About</Link>
          </li>
        </ul>
        <Link to='/seller/home/store' className="logo">
          SouqKantra
        </Link>
        <ul className="left">
          <li><img src="../../public/icons/notification.png"/></li>
          <li><Link to="/seller/profile"><img src="../../public/icons/img_lock.svg"/></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default SellerFirstNav;
