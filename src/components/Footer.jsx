import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Company Info</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Affiliate</a>
              </li>
              <li>
                <a href="#">Fashion Blogger</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Help & Support</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">Shipping Info</a>
              </li>
              <li>
                <a href="#">Refunds</a>
              </li>
              <li>
                <a href="#">How To Order</a>
              </li>
              <li>
                <a href="#">How To Track</a>
              </li>
              <li>
                <a href="#">Size Guide</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Customer Care</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
            </ul>

            <div className="payment-icons mt-3">
              <FaCcPaypal />
              <FaCcVisa />
              <FaCcMastercard />
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="footer-title">Signup For The Latest News</h5>

            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
              />

              <button className="btn btn-outline-light">
                <FaArrowRight />
              </button>
            </div>

            <p className="mt-4">
              <FaEnvelope className="me-2" />
              bycafrica@gmail.com
            </p>

            <p>
              <FaPhoneAlt className="me-2" />
              +234 810 1071 001
            </p>
          </div>
        </div>

        <div className="text-center my-5">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>

          <a href="#" className="social-icon">
            <FaInstagram />
          </a>

          <a href="#" className="social-icon">
            <FaTwitter />
          </a>

          <a href="#" className="social-icon">
            <FaYoutube />
          </a>
        </div>

        <hr />

        <p className="text-center copyright mb-0">
          © {new Date().getFullYear()} BYC Africa. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
