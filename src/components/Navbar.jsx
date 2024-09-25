import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="menu-bar navbar navbar-expand-md">
            <div className="collapse navbar-collapse" id="menubar">
                <form className="d-flex d-md-none">
                    <input className="form-control form-control-sm me-2" type="search" placeholder="Search" />
                    <button className="btn btn-green" type="submit">
                        <i className="bi bi-search"></i>
                    </button>
                </form>
                <ul className="navbar-nav text-center m-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to="vendor.html">Vendor</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="products.html">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="about.html">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="blog.html">Blog</Link>
                    </li> */}
                    <li className="nav-item dropdown">
                        {/* <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">
                            Pages<i className="bi bi-chevron-down"></i>
                        </Link> */}
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <Link className="dropdown-item" to="categories.html">
                                    <i className="bi bi-tags"></i>All Categories
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="dashboard.html">
                                    <i className="bi bi-house-door"></i>Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="login.html">
                                    <i className="bi bi-box-arrow-in-right"></i>Login/Register
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="account.html">
                                    <i className="bi bi-people"></i>My Account
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="cart.html">
                                    <i className="bi bi-basket"></i>Cart
                                </Link>
                            </li>
                            <li>
                                <Link className="dropdown-item" to="checkout.html">
                                    <i className="bi bi-bag-check"></i>Checkout
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
