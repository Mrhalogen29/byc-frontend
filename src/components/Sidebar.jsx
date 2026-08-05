import { Link } from "react-router-dom";

function Sidebar({ showSidebar, handleClose }) {
  if (!showSidebar) return null;

  return (
    <>
      <div
        className="position-fixed top-0 start-0 w-100 h-100"
        style={{
          background: "rgba(0,0,0,0.5)",
          zIndex: 1040,
        }}
        onClick={handleClose}
      ></div>

      <div
        className="position-fixed top-0 start-0 bg-white h-100 p-4"
        style={{
          width: "280px",
          zIndex: 1050,
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Menu</h4>

          <button className="btn-close" onClick={handleClose}></button>
        </div>

        <ul className="list-unstyled">
          <li className="mb-3">
            <Link to="/" onClick={handleClose}>
              Shop Products
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/blog" onClick={handleClose}>
              Blog
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/about" onClick={handleClose}>
              About Us
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/contact" onClick={handleClose}>
              Contact
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/about" onClick={handleClose}>
              About us{" "}
            </Link>
          </li>
          <li className="mb-3">
            <Link to="/contact" onClick={handleClose}>
              {" "}
              contact us{" "}
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/cart" onClick={handleClose}>
              cart
            </Link>
          </li>

          <li className="mb-3">
            <Link to="/login" onClick={handleClose}>
              login
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
