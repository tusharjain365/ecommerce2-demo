import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-part">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4 align-self-center">
              <div className="footer-about">
                <a href="index.html">
                  <img
                    src="assets/images/logo/footer-logo.png"
                    className="img-fluid"
                    alt="logo"
                  />
                </a>
                {/* <p>
                  Download our app now and <br /> get the best service
                </p> */}
                {/* <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="#" className="btn">
                      <i className="fab fa-google-play me-2"></i>
                      Play Store
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="btn">
                      <i className="fab fa-apple me-2"></i>
                      App Store
                    </a>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-6 col-lg-3 align-self-center">
              <div className="widget">
                <h4>Store Information</h4>
                <ul className="list-unstyled m-0">
                  <li>
                    <a href="#">
                      <i className="bi bi-geo-alt-fill"></i>Demo Store
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-envelope-fill"></i>
                      algobazar@example.com
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="bi bi-telephone-fill"></i>
                      +880-1700-00000
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 align-self-center">
              <div className="widget">
                <h4>Products</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="account.html">
                      <i className="bi bi-chevron-right"></i>Products
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <i className="bi bi-chevron-right"></i>My Cart
                    </a>
                  </li>
                  {/* <li>
                    <a href="order.html">
                      <i className="bi bi-chevron-right"></i>Order History
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 align-self-center">
              <div className="widget">
                <h4>Information</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="about.html">
                      <i className="bi bi-chevron-right"></i>About Us
                    </a>
                  </li>
                  <li>
                    <a href="privacy.html">
                      <i className="bi bi-chevron-right"></i>Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="terms.html">
                      <i className="bi bi-chevron-right"></i>Terms & Conditions
                    </a>
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
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
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
