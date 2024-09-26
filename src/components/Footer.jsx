import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-part">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 align-self-center">
              <div className="footer-about">
                <Link to="index.html">
                  <img
                    src="assets/images/logo/footer-logo.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </Link>
                {/* <p>
                  Download our app now and <br /> get the best service
                </p> */}
                {/* <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="#" className="btn">
                      <i className="fab fa-google-play me-2"></i>
                      Play Store
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#" className="btn">
                      <i className="fab fa-apple me-2"></i>
                      App Store
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-3 align-self-center">
              <div className="widget">
                <h4>Store Information</h4>
                <ul className="list-unstyled m-0">
                  <li>
                    <Link to="#">
                      <i className="bi bi-geo-alt-fill"></i>Demo Store
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-envelope-fill"></i>
                      algobazar@example.com
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="bi bi-telephone-fill"></i>
                      +880-1700-00000
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 align-self-center">
              <div className="widget">
                <h4>Products</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/products">
                      <i className="bi bi-chevron-right"></i>Products
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="bi bi-chevron-right"></i>My Cart
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="order.html">
                      <i className="bi bi-chevron-right"></i>Order History
                    </Link>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 align-self-center">
              <div className="widget">
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/about">
                      <i className="bi bi-chevron-right"></i>About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy">
                      <i className="bi bi-chevron-right"></i>Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms">
                      <i className="bi bi-chevron-right"></i>Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-bottom-single">
                <p>Follow us on</p>
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-twitter"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-linkedin-in"></i>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-bottom-single">
                <p>&copy; All Rights Reserved</p>
                <img
                  src="assets/images/logo/algotoolz-logo.png"
                  className="img-fluid"
                  alt="algotoolz"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-bottom-single">
                <p>Powered By</p>
                <img
                  src="assets/images/logo/logo.png"
                  className="img-fluid"
                  alt="powered by"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer-bottom-single">
                <p>Payment Methods</p>
                <img
                  src="assets/images/logo/payment.png"
                  className="img-fluid"
                  alt="payment methods"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
