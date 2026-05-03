import cart from "../assets/cart.png";
import logo from "../assets/logo.png";
import heart from "../assets/heart.png";
import user from "../assets/user.png";
import search from "../assets/search.png";
import { Menu } from "lucide-react";

function Navbar() {
  return (
    <nav>
      <div className="container position-relative py-5">
        <a href="" className="nav-logo">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "72px",
              height: "44px",
            }}
          />
        </a>
        <ul className="list-unstyled d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-3">
            <li className="d-xl-none">
              <button className="btn">
                <Menu />
              </button>
            </li>

            <NavListItem title="Shop Products" />
            <NavListItem title="Blog" />
            <NavListItem title="FAQ" />
          </div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <NavListItem title="About Us" />

            <NavListItem title="Contact" />

            <NavListBtnItem src={search} alt="search icon" />
            <NavListBtnItem src={user} alt="user icon" />
            <NavListBtnItem src={heart} alt="heart icon" />
            <NavListBtnItem
              src={cart}
              alt="cart icon"
              showOnAllScreens={true}
            />
          </div>
        </ul>
      </div>
    </nav>
  );
}

function NavListItem({ title }) {
  return (
    <li className="d-none d-xl-block">
      <a href="" className="nav-link ">
        {title}
      </a>
    </li>
  );
}

function NavListBtnItem({ src, alt, showOnAllScreens }) {
  return (
    <li className={showOnAllScreens ? "" : "d-none d-xl-block"}>
      <button className="btn">
        <img src={src} alt={alt} className="nav-icon" />
      </button>
    </li>
  );
}

export default Navbar;
