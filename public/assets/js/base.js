// Preloader
class MyPreloader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="preloader">
            <div class="loader">
                <div class="box">
                    <div class="circle"></div>
                </div>
                <div class="box">
                    <div class="circle"></div>
                </div>
            </div>
        </div>`
    }
}
customElements.define('my-preloader', MyPreloader);
// Header
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <section class="header-part">
                <div class="container">
                    <div class="header-content">
                        <p>Monsoon sale! Upto 70% discount<a href="products.html" class="btn">Save 70% Now</a></p>
                    </div>
                </div>
            </section>
            <!-- Topbar -->
            <section class="topbar">
                <div class="container">
                    <div class="d-flex justify-content-between">
                        <div class="align-self-center topbar-logo">
                            <a href="index.html">
                                <img src="assets/images/logo/logo.png" class="img-fluid d-none d-md-block" alt="AlgoBazar">
                                <img src="assets/images/logo/mobile-logo.png" class="img-fluid d-md-none" alt="AlgoBazar">
                            </a>
                        </div>
                        <div class="flex-fill align-self-center d-none d-md-block topbar-form">
                            <form action="#">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="Search for..">
                                    <button class="btn btn-green" type="submit"><i class="bi bi-search"></i></button>
                                </div>
                            </form>
                        </div>
                        <div class="align-self-center ms-auto topbar-user">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a href="login.html" title="Login">
                                        <i class="bi bi-person"></i>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="javascript: void(0);" class="cartButton" class="Cart">
                                        <i class="bi bi-cart3"></i>
                                        <sup>0</sup>
                                    </a>
                                </li>
                                <li class="list-inline-item">
                                    <a href="wishlist.html">
                                        <i class="bi bi-heart"></i>
                                    <sup>0</sup>
                                    </a>
                                </li>
                                <li class="list-inline-item d-md-none">
                                    <a class="navbar-toggler" href="#menubar" data-bs-toggle="collapse">
                                        <i class="bi bi-three-dots-vertical"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Cart Sidebar -->
            <section class="cart-sidebar">
                <div class="container">
                <a class="cart-close-btn" href="javascript: void(0);"><i class="fas fa-times"></i></a>
                    <div class="cart-box">
                        <h4>Shopping Cart</h4>
                        <hr>
                        <div class="table-responsive cart-table">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="product-detail.html" class="item_img"><img
                                                src="assets/images/products/01.jpg" class="img-fluid"
                                                alt="AlgoBazar"></a>
                                        </td>
                                        <td>
                                            <h6 class="item_name"><a href="product-detail.html">Lorem ipsum dolor sit amet
                                                consectetur adipisicing, elit.</a></h6>
                                            <p class="item_quantity">1 x <span>$37.50</span></p>
                                        </td>
                                        <td>
                                            <button type="button" class="btn p-0 item_remove"><i
                                                class="bi bi-trash text-danger"></i></button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="product-detail.html" class="item_img"><img
                                                src="assets/images/products/02.jpg" class="img-fluid"
                                                alt="AlgoBazar"></a>
                                        </td>
                                        <td>
                                            <h6 class="item_name"><a href="product-detail.html">Lorem ipsum dolor sit amet
                                                consectetur adipisicing, elit.</a></h6>
                                            <p class="item_quantity">1 x <span>$37.50</span></p>
                                        </td>
                                        <td>
                                            <button type="button" class="btn p-0 item_remove"><i
                                                class="bi bi-trash text-danger"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="cart_bill">
                            <ul class="list-unstyled">
                                <li>
                                    <span class="bill_title">Sub Total:</span>
                                    <span class="bill_amount">$0.00</span>
                                </li>
                                <li>
                                    <span class="bill_title">Total:</span>
                                    <span class="bill_amount">$0.00</span>
                                </li>
                            </ul>
                        </div>
                        <div class="cart-btn">
                            <a href="cart.html" class="btn btn-red-outline"><i class="bi bi-basket2-fill"></i>View Cart</a>
                            <a href="checkout.html" class="btn btn-red-outline"><i
                                class="fas fa-sign-out-alt"></i>Checkout</a>
                        </div>
                    </div>
                </div>
            </section>
        </header>`
    }
}
customElements.define('my-header', MyHeader);
// Navigation
class MyNavigation extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="menu-bar navbar navbar-expand-md">
            <div class="collapse navbar-collapse" id="menubar">
                <form class="d-flex d-md-none">
                    <input class="form-control form-control-sm me-2" type="search" placeholder="Search">
                    <button class="btn btn-green" type="submit"><i class="bi bi-search"></i></button>
                </form>
                <ul class="navbar-nav text-center m-0">
                    <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="vendor.html">Vendor</a></li>
                    <li class="nav-item"><a class="nav-link" href="products.html">Products</a></li>
                    <li class="nav-item"><a class="nav-link" href="about.html">About Us</a></li>
                    <li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Pages<i class="bi bi-chevron-down"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end">
                            <li><a class="dropdown-item" href="categories.html"><i class="bi bi-tags"></i>All Categories</a></li>
                            <li><a class="dropdown-item" href="dashboard.html"><i class="bi bi-house-door"></i>Dashboard</a></li>
                            <li><a class="dropdown-item" href="login.html"><i class="bi bi-box-arrow-in-right"></i>Login/Register</a></li>
                            <li><a class="dropdown-item" href="account.html"><i class="bi bi-people"></i>My Account</a></li>
                            <li><a class="dropdown-item" href="cart.html"><i class="bi bi-basket"></i>Cart</a></li>
                            <li><a class="dropdown-item" href="checkout.html"><i class="bi bi-bag-check"></i>Checkout</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>`
    }
}
customElements.define('my-navigation', MyNavigation);
// Footer
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer-part">
            <div class="footer-top">
                <div class="container">
                <div class="row">
                    <div class="col-md-6 col-lg-4 align-self-center">
                        <div class="footer-about">
                            <a href="index.html"><img src="assets/images/logo/footer-logo.png" class="img-fluid"
                                    alt="logo"></a>
                            <p>Download our app now and <br>get the best service</p>
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#" class="btn"><i
                                            class="fab fa-google-play me-2"></i>Play Store</a></li>
                                <li class="list-inline-item"><a href="#" class="btn"><i
                                            class="fab fa-apple me-2"></i>App Store</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 align-self-center">
                        <div class="widget">
                            <h4>Store Information</h4>
                            <ul class="list-unstyled m-0">
                                <li><a href="#"><i class="bi bi-geo-alt-fill"></i>Demo Store</a></li>
                                <li><a href="#"><i class="bi bi-envelope-fill"></i>algobazar@example.com</a></li>
                                <li><a href="#"><i class="bi bi-telephone-fill"></i>+880-1700-00000</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-3 align-self-center">
                        <div class="widget">
                            <h4>My Account</h4>
                            <ul class="list-unstyled">
                                <li><a href="account.html"><i class="bi bi-chevron-right"></i>My Account</a></li>
                                <li><a href="cart.html"><i class="bi bi-chevron-right"></i>My Cart</a></li>
                                <li><a href="order.html"><i class="bi bi-chevron-right"></i>Order History</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-2 align-self-center">
                        <div class="widget">
                            <h4>Information</h4>
                            <ul class="list-unstyled">
                                <li><a href="about.html"><i class="bi bi-chevron-right"></i>About Us</a></li>
                                <li><a href="privacy.html"><i class="bi bi-chevron-right"></i>Privacy Policy</a></li>
                                <li><a href="terms.html"><i class="bi bi-chevron-right"></i>Terns & Condition</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="footer-bottom text-center">
                <div class="container">
                <div class="row">
                    <!-- footer-bottom-single -->
                    <div class="col-md-3">
                        <div class="footer-bottom-single">
                            <p>Follow us on</p>
                            <ul class="list-inline">
                                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <!-- footer-bottom-single -->
                    <div class="col-md-3">
                        <div class="footer-bottom-single">
                            <p>&copy;All Rights Reserved</p>
                            <img src="assets/images/logo/algotoolz-logo.png" class="img-fluid" alt="pallihut">
                        </div>
                    </div>
                    <!-- footer-bottom-single -->
                    <div class="col-md-3">
                        <div class="footer-bottom-single">
                            <p>Powered By</p>
                            <img src="assets/images/logo/logo.png" class="img-fluid" alt="pallihut">
                        </div>
                    </div>
                    <!-- footer-bottom-single -->
                    <div class="col-md-3">
                        <div class="footer-bottom-single">
                            <p>Payment Methods</p>
                            <img src="assets/images/logo/payment.png" class="img-fluid" alt="pallihut">
                        </div>
                    </div>
                    <!-- footer-bottom-single -->
                </div>
                </div>
            </div>
        </footer>`
    }
}
customElements.define('my-footer', MyFooter);