import cart from "../assets/cart.png";
import logo from "../assets/logo.png";

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
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <li>
              <a href="">Shop Products</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">FAQ</a>
            </li>
          </div>
          <div className=" d-flex justify-content-between align-items-center gap-3">
            <li>
              <a href="">About Us</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
            <li>
              <button>
                <img src="" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="" alt="" />
              </button>
            </li>
            <li>
              <button>
                <img src="" alt="" />
              </button>
            </li>
            <li>
              <button className="btn">
                <img src={cart} alt="cart icon" className="nav-icon" />
              </button>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
