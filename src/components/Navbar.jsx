import cart from "../assets/cart.png";
import logo from "../assets/logo.png";
import heart from "../assets/heart.png";
import user from "../assets/user.png";
import search from "../assets/search.png";
import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  function handleClick() {
    setShowSearch(!showSearch);
  }

  // Using a state variable and event handler function, add functionality
  // that will allow you to show the sidebar
  // the sidebar component is shown
  // when its first level element has a class of show

  return (
    <>
      <nav>
        <div className="container position-relative py-5">
          <div className="nav-logo-container">
            {showSearch ? (
              <SearchBar />
            ) : (
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
            )}
          </div>
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

              <NavListBtnItem
                src={search}
                alt="search icon"
                showOnAllScreens={true}
                onClick={handleClick}
              />
              <NavListBtnItem src={user} alt="user icon" />
              <NavListBtnItem src={heart} alt="heart icon" />
              <NavListBtnItem src={cart} alt="cart icon" />
            </div>
          </ul>
        </div>
      </nav>
      <Sidebar />
    </>
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

function NavListBtnItem({ src, alt, showOnAllScreens, onClick }) {
  return (
    <li className={showOnAllScreens ? "" : "d-none d-xl-block"}>
      <button className="btn" onClick={onClick}>
        <img src={src} alt={alt} className="nav-icon" />
      </button>
    </li>
  );
}

function SearchBar() {
  return (
    <input
      type="search"
      name="search"
      id=""
      className="border-none border-bottom border-black"
    />
  );
}

export default Navbar;
