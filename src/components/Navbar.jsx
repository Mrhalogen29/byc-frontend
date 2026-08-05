import { Link } from "react-router-dom";
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
  const [showSidebar, setShowSidebar] = useState(false);

  function handleClick() {
    setShowSearch(!showSearch);
  }

  function handleShowSidebar() {
    setShowSidebar(true);
  }
  function handleCloseSidebar() {
    setShowSidebar(false);
  }

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
                <button className="btn" onClick={handleShowSidebar}>
                  <Menu />
                </button>
              </li>

              <NavListItem title="Shop Products" to="/" />
              <NavListItem title="Blog" to="/blog" />
              <NavListItem title="FAQ" />
            </div>
            <div className=" d-flex justify-content-between align-items-center gap-3">
              <NavListItem title="About Us" to="/about" />

              <NavListItem title="Contact" to="/contact" />

              <NavListBtnItem
                src={search}
                alt="search icon"
                showOnAllScreens={true}
                onClick={handleClick}
              />
              <NavListBtnItem src={user} alt="user icon" to="/login" />
              <NavListBtnItem src={heart} alt="heart icon" />
              <NavListBtnItem src={cart} alt="cart icon" to="/cart" />
            </div>
          </ul>
        </div>
      </nav>
      <Sidebar showSidebar={showSidebar} handleClose={handleCloseSidebar} />
    </>
  );
}

function NavListItem({ title, href, to }) {
  return (
    <li className="d-none d-xl-block">
      {to ? (
        <Link to={to} className="nav-link ">
          {title}
        </Link>
      ) : (
        <a href={href} className="nav-link ">
          {title}
        </a>
      )}
    </li>
  );
}

function NavListBtnItem({ src, alt, showOnAllScreens, onClick, to }) {
  return (
    <li className={showOnAllScreens ? "" : "d-none d-xl-block"}>
      {to ? (
        <Link to={to} className="btn">
          <img src={src} alt={alt} className="nav-icon" />
        </Link>
      ) : (
        <button className="btn" onClick={onClick}>
          <img src={src} alt={alt} className="nav-icon" />
        </button>
      )}
    </li>
  );
}

function SearchBar() {
  return (
    <input
      type="search"
      name="search"
      id=""
      style={{
        maxWidth: 250,
        width: "calc(180px + 5vw)",
        outline: "0px",
        border: 0,
        borderBottom: "1px solid black",
      }}
      className="shadow-none"
    />
  );
}

export default Navbar;
