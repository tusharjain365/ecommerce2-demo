import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <section className="header-part">
                <div className="container">
                    <div className="header-content">
                        <p>
                            Monsoon sale! Upto 70% discount
                            <Link to="/products" className="btn">Save 70% Now</Link>
                        </p>
                    </div>
                </div>
            </section>
            {/* Topbar */}
            <section className="topbar">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="align-self-center topbar-logo">
                            <Link to="/">
                                <img
                                    src="assets/images/logo/logo.png"
                                    className="img-fluid d-none d-md-block"
                                    alt="AlgoBazar"
                                />
                                <img
                                    src="assets/images/logo/mobile-logo.png"
                                    className="img-fluid d-md-none"
                                    alt="AlgoBazar"
                                />
                            </Link>
                        </div>
                        <div className="flex-fill align-self-center d-none d-md-block topbar-form">
                            <form action="#">
                                <div className="input-group">
                                    <input
                                        type="search"
                                        className="form-control"
                                        placeholder="Search for.."
                                    />
                                    <button className="btn btn-green" type="submit">
                                        <i className="bi bi-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="align-self-center ms-auto topbar-user">
                            <ul className="list-inline">
                                {/* <li className="list-inline-item">
                                    <a href="login.html" title="Login">
                                        <i className="bi bi-person"></i>
                                    </a>
                                </li> */}
                                <li className="list-inline-item">
                                    <Link to="/cart" className="cartButton">
                                        <i className="bi bi-cart3"></i>
                                        <sup>0</sup>
                                    </Link>
                                </li>
                                {/* <li className="list-inline-item">
                                    <a href="wishlist.html">
                                        <i className="bi bi-heart"></i>
                                        <sup>0</sup>
                                    </a>
                                </li> */}
                                <li className="list-inline-item d-md-none">
                                    <a className="navbar-toggler" href="#menubar" data-bs-toggle="collapse">
                                        <i className="bi bi-three-dots-vertical"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Sidebar */}
            <section className="cart-sidebar">
                <div className="container">
                    <a className="cart-close-btn" href="javascript: void(0);">
                        <i className="fas fa-times"></i>
                    </a>
                    <div className="cart-box">
                        <h4>Shopping Cart</h4>
                        <hr />
                        <div className="table-responsive cart-table">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="product-detail.html" className="item_img">
                                                <img
                                                    src="assets/images/products/01.jpg"
                                                    className="img-fluid"
                                                    alt="AlgoBazar"
                                                />
                                            </a>
                                        </td>
                                        <td>
                                            <h6 className="item_name">
                                                <a href="product-detail.html">Lorem ipsum dolor sit amet consectetur adipisicing, elit.</a>
                                            </h6>
                                            <p className="item_quantity">1 x <span>$37.50</span></p>
                                        </td>
                                        <td>
                                            <button type="button" className="btn p-0 item_remove">
                                                <i className="bi bi-trash text-danger"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="product-detail.html" className="item_img">
                                                <img
                                                    src="assets/images/products/02.jpg"
                                                    className="img-fluid"
                                                    alt="AlgoBazar"
                                                />
                                            </a>
                                        </td>
                                        <td>
                                            <h6 className="item_name">
                                                <a href="product-detail.html">Lorem ipsum dolor sit amet consectetur adipisicing, elit.</a>
                                            </h6>
                                            <p className="item_quantity">1 x <span>$37.50</span></p>
                                        </td>
                                        <td>
                                            <button type="button" className="btn p-0 item_remove">
                                                <i className="bi bi-trash text-danger"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="cart_bill">
                            <ul className="list-unstyled">
                                <li>
                                    <span className="bill_title">Sub Total:</span>
                                    <span className="bill_amount">$0.00</span>
                                </li>
                                <li>
                                    <span className="bill_title">Total:</span>
                                    <span className="bill_amount">$0.00</span>
                                </li>
                            </ul>
                        </div>
                        <div className="cart-btn">
                            <a href="cart.html" className="btn btn-red-outline">
                                <i className="bi bi-basket2-fill"></i>View Cart
                            </a>
                            <a href="checkout.html" className="btn btn-red-outline">
                                <i className="fas fa-sign-out-alt"></i>Checkout
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </header>
    );
};

export default Header;
