import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* <my-preloader></my-preloader> */}
    <section className="banner">
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-xl-3 order-1 order-md-0">
                    <div className="banner-category">
                        <h5 className="green-title"><i className="bi bi-grid me-2"></i>Top Categories</h5>
                        <div className="category-list">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/smartphone.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Mobile & Gadgets</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item">
                                            <Link className="nav-link menu-link" to="/categories">Mobile</Link>
                                            <ul className="subsub-menu">
                                                <li className="nav-item"><Link className="nav-link" to="/">Smart Phone</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Feature Phone</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Tablet</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu-link" to="/categories">Mobile Accessories</Link>
                                            <ul className="subsub-menu">
                                                <li className="nav-item"><Link className="nav-link" to="/">Data Cable &
                                                        Charger</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Headphone &
                                                        Earphone</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Power Bank</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/computer.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Computer & Accessories</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Laptop</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Monitor</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/watch.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Watches & Accessories</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Smart Watches</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Titan</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/home.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Home Appliances</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Television</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Washing Machine</Link></li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu-link" to="/categories">Accessories</Link>
                                            <ul className="subsub-menu">
                                                <li className="nav-item"><Link className="nav-link" to="/">Geyser & Water
                                                        Heater</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Tools & Hardware</Link>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Kitchen Appliances</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/cardiogram.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Health & Beauty</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item">
                                            <Link className="nav-link menu-link" to="/categories">Personal Care</Link>
                                            <ul className="subsub-menu">
                                                <li className="nav-item"><Link className="nav-link" to="/">Cream & Lotion</Link>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Beard Grooming</Link>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Skin Care</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Hair Care</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu-link" to="/categories">Health Care</Link>
                                            <ul className="subsub-menu">
                                                <li className="nav-item"><Link className="nav-link" to="/">Food Supplements</Link>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Herbal & Digestive
                                                        Aids</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">First Aid</Link></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link menu-link" to="/categories">Home & Cleaning</Link>
                                            <ul className="subsub-menu">
                                                <li className="nav-item"><Link className="nav-link" to="/">Air Fresheners</Link>
                                                </li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Laundry</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to="/">Cleaning
                                                        Accessories</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/food.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Food & Beverages</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Desi Food</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Chinese Food</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Soft Drinks</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/tshirt.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Fashion Accessories</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Men's</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Women's</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Kids Zone</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/grocery.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Grocery</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Fruits & Vegetables</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Meat & Fish</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/motorcycle.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Motor Bike</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">cruiser</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">sport</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/snacks.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>Snacks</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Soups</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Candy & Chocolate</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/frozen-food.png" className="img-fluid"
                                            alt="AlgoBazar"/>
                                        <span>Frozen & Canned</span>
                                    </Link>
                                    <ul className="sub-menu">
                                        <li className="nav-item"><Link className="nav-link" to="/">Frozen Snacks</Link></li>
                                        <li className="nav-item"><Link className="nav-link" to="/">Canned Food</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link menu-link" to="/categories">
                                        <img src="/assets/images/icons/more.png" className="img-fluid" alt="AlgoBazar"/>
                                        <span>More</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-md-8 col-xl-9 order-0 order-md-1">
                    <Navbar/>
                    <div className="banner-slider">
                        <div id="banner-carousel" className="carousel slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-bs-target="#banner-carousel" data-bs-slide-to="0" className="active"></li>
                                <li data-bs-target="#banner-carousel" data-bs-slide-to="1"></li>
                                <li data-bs-target="#banner-carousel" data-bs-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <Link to="product-detail.html"><img src="/assets/images/banner/01.jpg"
                                            className="img-fluid d-block w-100" alt="pallihut"/></Link>
                                </div>
                                <div className="carousel-item">
                                    <Link to="product-detail.html"><img src="/assets/images/banner/02.jpg"
                                            className="img-fluid d-block w-100" alt="pallihut"/></Link>
                                </div>
                                <div className="carousel-item">
                                    <Link to="product-detail.html"><img src="/assets/images/banner/03.jpg"
                                            className="img-fluid d-block w-100" alt="pallihut"/></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service">
                        <div className="owl-carousel service-carousel">
                            <div className="service-single">
                                <div className="d-flex">
                                    <div className="align-self-center service-single-svg">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496">
                                            <g>
                                                <path
                                                    d="M402.524,432l-18.52-55.568c-6.472-19.4-22.984-33.72-43.112-37.384l-53.464-9.728v-4.144 c9.304-5.4,17.4-12.624,23.848-21.176h16.152c13.232,0,24-10.768,24-24v-96c0-57.344-46.656-104-104-104s-104,46.656-104,104v56 c0,15.424,10.968,28.328,25.512,31.336c4.488,22.992,18.856,42.448,38.488,53.84v4.144l-53.472,9.728 c-20.12,3.664-36.64,17.984-43.104,37.384l-3.2,9.608l-27.248-27.248c-3.12-3.12-3.12-8.2,0-11.32l31.6-31.592l-59.312-59.312 L16.98,292.28c-10.576,10.576-16.4,24.64-16.4,39.6s5.824,29.016,16.4,39.592l108.12,108.12C135.676,490.168,149.74,496,164.7,496 c14.96,0,29.016-5.832,39.344-16.168l38.968-35.704L230.86,432H402.524z M335.428,280c0,4.416-3.592,8-8,8H320.7 c2.32-5.288,4.08-10.864,5.216-16.664c3.424-0.712,6.576-2.072,9.512-3.784V280z M327.428,253.776v-27.552 c4.76,2.776,8,7.88,8,13.776S332.188,251,327.428,253.776z M167.428,253.776c-4.76-2.776-8-7.88-8-13.776s3.24-11,8-13.776 V253.776z M167.428,200v9.136c-2.848,0.744-5.52,1.864-8,3.312V184c0-48.52,39.48-88,88-88s88,39.48,88,88v28.448 c-2.48-1.448-5.152-2.576-8-3.312V200h-8c-23.656,0-45.896-9.216-62.632-25.944l-9.368-9.368l-9.368,9.368 C221.324,190.784,199.084,200,175.428,200H167.428z M183.428,256v-40.304c24.024-1.808,46.424-11.72,64-28.432 c17.576,16.712,39.976,26.632,64,28.432V256c0,11.664-3.184,22.576-8.656,32h-55.344v16h42.192c-11.28,9.928-26.024,16-42.192,16 C212.14,320,183.428,291.288,183.428,256z M271.428,332.312v0.376l-24,24l-24-24v-0.376c7.584,2.384,15.64,3.688,24,3.688 S263.844,334.696,271.428,332.312z M126.02,381.488c4.616-13.856,16.416-24.088,30.792-26.712l55.92-10.16l34.696,34.696 l34.688-34.688l55.912,10.16c14.376,2.624,26.176,12.848,30.792,26.712L380.332,416H214.86l-31.16-31.16l-34.624,31.32 c-3.016,3.032-8.288,3.032-11.312,0l-17.472-17.472L126.02,381.488z M52.684,279.192l36.688,36.688l-8.688,8.688L43.996,287.88 L52.684,279.192z M192.964,468.296c-7.552,7.536-17.6,11.704-28.28,11.704c-10.68,0-20.728-4.168-28.288-11.72L28.276,360.168 c-7.552-7.552-11.712-17.6-11.712-28.28c0-10.688,4.16-20.736,11.712-28.288l4.4-4.4l36.688,36.688l-0.288,0.288 c-9.352,9.36-9.352,24.584,0,33.944l57.368,57.368c4.536,4.528,10.56,7.032,16.976,7.032s12.44-2.496,16.68-6.752l0.6-0.536 l36.856,36.856L192.964,468.296z M209.364,453.256l-36.776-36.776l10.568-9.552l36.712,36.712L209.364,453.256z"/>
                                            </g>
                                            <g>
                                                <path
                                                    d="M471.428,0h-112c-13.232,0-24,10.768-24,24v64c0,13.232,10.768,24,24,24h21.368l-8.272,48.248l77.2-48.248h21.704 c13.232,0,24-10.768,24-24V24C495.428,10.768,484.66,0,471.428,0z M479.428,88c0,4.408-3.592,8-8,8h-26.296l-50.808,31.752 L399.772,96h-40.344c-4.408,0-8-3.592-8-8V24c0-4.408,3.592-8,8-8h112c4.408,0,8,3.592,8,8V88z" />
                                            </g>
                                            <g>
                                                <rect x="367.428" y="32" width="96" height="16" />
                                            </g>
                                            <g>
                                                <rect x="367.428" y="64" width="64" height="16" />
                                            </g>
                                            <g>
                                                <rect x="447.428" y="64" width="16" height="16" />
                                            </g>
                                            <g>
                                                <path
                                                    d="M247.428,24C142.9,24,52.86,96.304,29.452,197.16l-15.16-25.272l-13.72,8.232l28.12,46.856l46.856-28.12l-8.232-13.72 l-21.68,13.008C68.308,105.88,151.276,40,247.428,40c21.016,0,41.752,3.12,61.632,9.28L313.796,34 C292.38,27.36,270.052,24,247.428,24z" />
                                            </g>
                                            <g>
                                                <path
                                                    d="M491.54,177.136l-46.856-28.12l-28.112,46.864l13.72,8.232l14-23.336c7.368,21.56,11.136,44.112,11.136,67.224 c0,47.576-16.48,94.088-46.392,130.96l12.424,10.08c32.224-39.712,49.968-89.808,49.968-141.04 c0-24.472-3.944-48.368-11.632-71.248l23.512,14.104L491.54,177.136z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="align-self-center service-single-text">
                                        <p>24/7</p>
                                        <p>Support</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-single">
                                <div className="d-lg-flex">
                                    <div className="align-self-center service-single-svg">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="m52.433 312.975c-5.151-18.452-7.763-37.621-7.763-56.975 0-49.779 17.516-97.654 49.464-135.698 12.514 12.239 29.619 19.803 48.464 19.803 38.25 0 69.368-31.119 69.368-69.368 0-7.225-1.113-14.193-3.172-20.747 15.416-3.529 31.265-5.32 47.208-5.32 51.262 0 99.495 17.968 137.689 50.951h-16.208c-6.855 0-12.431 5.577-12.431 12.431v19.806c0 6.855 5.577 12.431 12.431 12.431h79.556c7.401 0 13.421-6.021 13.421-13.421v-79.557c0-6.855-5.577-12.431-12.431-12.431h-19.807c-6.855 0-12.431 5.577-12.431 12.431v17.033c-46.733-41.621-106.37-64.344-169.791-64.344-26.312 0-52.202 3.953-76.983 11.732-10.593-6.563-23.069-10.364-36.42-10.364-38.25 0-69.368 31.119-69.368 69.368 0 13.94 4.148 26.923 11.254 37.808-35.361 41.073-54.773 93.211-54.773 147.456 0 19.872 2.575 39.568 7.656 58.585l-14.124 4.284c-5.497-20.405-8.283-41.542-8.283-62.869 0-51.13 15.7-99.854 45.402-140.904 2.422-3.347 1.672-8.023-1.675-10.444-3.346-2.422-8.023-1.671-10.444 1.675-31.56 43.618-48.242 95.374-48.242 149.673 0 23.556 3.203 46.899 9.519 69.382 1.687 6.572 9.155 10.663 15.587 8.553l18.959-5.75c6.413-1.945 10.166-8.768 8.368-15.21zm375.494-225.933c2.127 2.172 5.356 2.838 8.169 1.69 2.814-1.149 4.653-3.886 4.653-6.925v-31.968h14.751v75.491h-75.491v-14.751h32.519c3.007 0 5.722-1.801 6.891-4.572s.565-5.972-1.534-8.127c-42.824-43.96-100.316-68.17-161.885-68.17-18.037 0-35.967 2.139-53.359 6.358-2.696-4.65-5.912-8.959-9.576-12.847 20.397-5.479 41.514-8.261 62.935-8.261 65.325-.001 126.383 25.599 171.927 72.082zm-285.33-70.715c30.001 0 54.409 24.408 54.409 54.409s-24.408 54.409-54.409 54.409-54.409-24.408-54.409-54.409 24.408-54.409 54.409-54.409z" />
                                                <path
                                                    d="m426.441 426.442c-45.526 45.526-106.056 70.599-170.441 70.599-33.764 0-66.377-6.796-96.933-20.199-3.784-1.659-8.194.061-9.854 3.845-1.66 3.783.062 8.195 3.845 9.854 32.462 14.239 67.097 21.459 102.942 21.459 68.38 0 132.667-26.628 181.019-74.981 2.921-2.921 2.921-7.657 0-10.578-2.921-2.92-7.657-2.92-10.578.001z" />
                                                <path
                                                    d="m501.909 184.615c-.94-3.246-3.096-5.913-6.07-7.511-2.967-1.594-6.372-1.919-9.588-.916l-18.909 5.905c-6.397 1.997-10.095 8.849-8.244 15.276 5.752 19.966 8.514 40.744 8.21 61.756-.823 56.911-23.724 109.883-64.486 149.16-40.82 39.333-94.705 60.276-151.724 58.991-49.398-1.119-95.904-19.064-132.817-50.921h16.238c6.855 0 12.431-5.577 12.431-12.431v-19.807c0-6.854-5.577-12.431-12.431-12.431h-79.556c-7.401 0-13.421 6.021-13.421 13.421v79.556c0 6.855 5.577 12.431 12.431 12.431h19.807c6.855 0 12.431-5.577 12.431-12.431v-17.017c11.231 9.986 23.308 18.961 36.06 26.79 3.522 2.162 8.126 1.059 10.287-2.461 2.161-3.521 1.059-8.126-2.461-10.287-16.715-10.262-32.2-22.618-46.023-36.727-2.128-2.171-5.356-2.838-8.17-1.69-2.814 1.149-4.652 3.886-4.652 6.925v31.941h-14.751v-75.491h75.491v14.751h-32.552c-3.007 0-5.722 1.801-6.891 4.572-1.17 2.77-.566 5.971 1.532 8.126 41.473 42.59 97.116 66.789 156.678 68.138 1.777.04 3.549.06 5.321.06 59.064 0 114.681-22.339 157.122-63.234 43.656-42.065 68.183-98.787 69.063-159.716.313-21.643-2.416-43.06-8.114-63.703l14.088-4.399c5.841 20.993 8.801 42.768 8.801 64.762 0 53.031-16.789 103.226-48.552 145.157-2.494 3.293-1.847 7.985 1.446 10.479s7.984 1.846 10.479-1.446c33.748-44.555 51.587-97.874 51.587-154.193 0-24.264-3.395-48.281-10.091-71.385z" />
                                                <path
                                                    d="m141.957 361.149h230.066c13.954 0 25.306-11.352 25.306-25.305v-151.907c0-13.954-11.352-25.306-25.306-25.306h-8.257c-7.389-19.364-26.205-32.539-47.232-32.539-1.531 0-3.059.087-4.58.224-3.53-24.442-24.608-43.286-50.012-43.286-27.868 0-50.541 22.672-50.541 50.541 0 8.838 2.36 17.484 6.679 25.059h-76.123c-13.954 0-25.305 11.352-25.305 25.306v40.002h-1.261c-9.623 0-17.452 7.829-17.452 17.452v36.999c0 9.623 7.829 17.452 17.452 17.452h1.261v40.002c0 13.954 11.352 25.306 25.305 25.306zm205.268-202.518h-41.374c3.049-5.319 5.101-11.147 6.039-17.267 1.535-.2 3.087-.312 4.644-.312 12.785-.001 24.407 6.916 30.691 17.579zm-120.865-25.059c0-19.62 15.962-35.582 35.582-35.582s35.582 15.962 35.582 35.582c0 9.488-3.671 18.352-10.337 25.059h-50.491c-6.669-6.705-10.336-15.552-10.336-25.059zm-94.749 72.799h6.822c4.131 0 7.48-3.349 7.48-7.48s-3.349-7.48-7.48-7.48h-6.822v-7.475c0-5.705 4.641-10.347 10.346-10.347h230.066c5.705 0 10.347 4.642 10.347 10.347v151.906c0 5.705-4.642 10.346-10.347 10.346h-230.066c-5.705 0-10.346-4.641-10.346-10.346v-7.476h6.822c4.131 0 7.48-3.349 7.48-7.48s-3.349-7.48-7.48-7.48h-6.822v-17.567h50.076c9.623 0 17.452-7.829 17.452-17.452v-36.999c0-9.623-7.829-17.452-17.452-17.452h-50.076zm-18.714 72.019v-36.999c0-1.375 1.119-2.493 2.493-2.493h66.296c1.375 0 2.493 1.119 2.493 2.493v36.999c0 1.375-1.119 2.493-2.493 2.493h-66.296c-1.374 0-2.493-1.119-2.493-2.493z" />
                                                <path
                                                    d="m122.379 103.415c4.299 2.776 7.624 4.085 11.387 4.667v1.265c0 4.131 3.349 7.48 7.48 7.48s7.48-3.349 7.48-7.48v-2.071c8.655-2.923 14.186-10.64 15.468-18.26 1.771-10.535-3.935-20.051-14.198-23.679-5.19-1.835-10.916-4.04-14.027-6.479-.473-.372-.8-1.62-.527-3.066.141-.75.795-3.257 3.263-4 5.447-1.64 8.912 1.083 9.289 1.399l-.12-.108 2.068.863c7.35 3.069 13.624-6.146 8.075-11.86-1.823-1.681-5.072-3.718-9.289-4.866v-1.133c0-4.131-3.349-7.48-7.48-7.48s-7.48 3.349-7.48 7.48v1.593c-6.692 2.27-11.658 8.084-13.026 15.341-1.307 6.934.99 13.681 5.996 17.608 4.801 3.765 11.62 6.46 18.273 8.813 4.387 1.551 4.832 4.714 4.431 7.095-.563 3.352-3.384 6.974-8.245 7.006-5.444.038-6.87-.187-10.915-2.834-3.707-2.424-8.765-1.136-10.803 2.947-1.727 3.456-.345 7.664 2.9 9.759z" />
                                                <path
                                                    d="m154.502 253.401h-11.905c-4.131 0-7.48 3.349-7.48 7.48s3.349 7.48 7.48 7.48h11.905c4.131 0 7.48-3.349 7.48-7.48-.001-4.132-3.35-7.48-7.48-7.48z" />
                                                <path
                                                    d="m229.569 206.371h25.582c4.131 0 7.48-3.349 7.48-7.48s-3.349-7.48-7.48-7.48h-25.582c-4.131 0-7.48 3.349-7.48 7.48 0 4.132 3.349 7.48 7.48 7.48z" />
                                                <path
                                                    d="m288.042 206.371h25.582c4.131 0 7.48-3.349 7.48-7.48s-3.349-7.48-7.48-7.48h-25.582c-4.131 0-7.48 3.349-7.48 7.48.001 4.132 3.349 7.48 7.48 7.48z" />
                                                <path
                                                    d="m204.156 198.892c0-4.131-3.349-7.48-7.48-7.48h-25.582c-4.131 0-7.48 3.349-7.48 7.48s3.349 7.48 7.48 7.48h25.582c4.132-.001 7.48-3.349 7.48-7.48z" />
                                                <path
                                                    d="m345.294 206.371h6.822v6.822c0 4.131 3.349 7.48 7.48 7.48s7.48-3.349 7.48-7.48v-9.349c0-6.855-5.577-12.431-12.431-12.431h-9.349c-4.131 0-7.48 3.349-7.48 7.48-.002 4.13 3.347 7.478 7.478 7.478z" />
                                                <path
                                                    d="m359.595 239.335c-4.131 0-7.48 3.349-7.48 7.48v26.334c0 4.131 3.349 7.48 7.48 7.48s7.48-3.349 7.48-7.48v-26.334c0-4.131-3.349-7.48-7.48-7.48z" />
                                                <path
                                                    d="m345.294 328.368h9.349c6.855 0 12.431-5.577 12.431-12.431v-9.349c0-4.131-3.349-7.48-7.48-7.48s-7.48 3.349-7.48 7.48v6.822h-6.822c-4.131 0-7.48 3.349-7.48 7.48.002 4.129 3.351 7.478 7.482 7.478z" />
                                                <path
                                                    d="m195.685 313.409h-25.582c-4.131 0-7.48 3.349-7.48 7.48s3.349 7.48 7.48 7.48h25.582c4.131 0 7.48-3.349 7.48-7.48-.001-4.132-3.35-7.48-7.48-7.48z" />
                                                <path
                                                    d="m228.576 328.368h25.582c4.131 0 7.48-3.349 7.48-7.48s-3.349-7.48-7.48-7.48h-25.582c-4.131 0-7.48 3.349-7.48 7.48.001 4.131 3.349 7.48 7.48 7.48z" />
                                                <path
                                                    d="m287.05 328.368h25.582c4.131 0 7.48-3.349 7.48-7.48s-3.349-7.48-7.48-7.48h-25.582c-4.131 0-7.48 3.349-7.48 7.48s3.349 7.48 7.48 7.48z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="align-self-center service-single-text">
                                        <p>Money</p>
                                        <p>Back</p>
                                    </div>
                                </div>
                            </div>
                            <div className="service-single">
                                <div className="d-lg-flex">
                                    <div className="align-self-center service-single-svg">
                                        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path
                                                    d="m56 240a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-96a8 8 0 0 0 -8-8h-58.7a27.836 27.836 0 0 0 2.7-12v-20a8 8 0 0 0 -8-8h-28a27.917 27.917 0 0 0 -20 8.423 27.917 27.917 0 0 0 -20-8.423h-28a8 8 0 0 0 -8 8v20a27.836 27.836 0 0 0 2.7 12h-10.7a8 8 0 0 0 -8 8zm16-40h32v32h-32zm48 32v-32h112v32zm112-48h-112v-32h112zm-84-72h20v12a12.013 12.013 0 0 1 -12 12h-20v-12a12.013 12.013 0 0 1 12-12zm-60 12v-12h20a12.013 12.013 0 0 1 12 12v12h-20a12.013 12.013 0 0 1 -12-12zm16 28v32h-32v-32z" />
                                                <path
                                                    d="m392 56a8 8 0 0 0 -8-8h-76a28.032 28.032 0 0 0 -28 28v12a8 8 0 0 0 8 8h76a28.032 28.032 0 0 0 28-28zm-16 12a12.013 12.013 0 0 1 -12 12h-68v-4a12.013 12.013 0 0 1 12-12h68z" />
                                                <path d="m56 56h56v16h-56z" />
                                                <path d="m128 56h120v16h-120z" />
                                                <path d="m280 120h32v16h-32z" />
                                                <path d="m328 120h64v16h-64z" />
                                                <path d="m360 160h32v16h-32z" />
                                                <path d="m280 160h64v16h-64z" />
                                                <path
                                                    d="m456.178 374.324a8.006 8.006 0 0 0 -.178 1.676v128h16v-127.152l8.394-39.172-15.645-3.352z" />
                                                <path
                                                    d="m495.845 262.431-28.785-143.921a28.075 28.075 0 0 0 -27.46-22.51h-7.6v-62a18.021 18.021 0 0 0 -18-18h-380a18.021 18.021 0 0 0 -18 18v62h16v-62a2 2 0 0 1 2-2h380a2 2 0 0 1 2 2v236c0 .469-.1 2-1.395 2h-10.76l-61.6-77a8 8 0 0 0 -10.9-1.512l-9.507 6.791a67.949 67.949 0 0 0 -26.493 71.721h-261.345a2 2 0 0 1 -2-2v-158h-16v158a18.021 18.021 0 0 0 18 18h15.415l31.814 113.019a17.993 17.993 0 0 0 22.2 12.449l140.126-39.445-10.141 20.733a8 8 0 0 0 3.671 10.7l3.594 1.758a67.419 67.419 0 0 0 42.612 5.724l-6.758 13.817a8 8 0 0 0 3.671 10.7l3.594 1.758a68.128 68.128 0 0 0 68.2-4.893v69.68h16v-136a8.008 8.008 0 0 0 -1.183-4.188l-49.1-79.939c-.029-.046-.058-.093-.088-.139a51.95 51.95 0 0 1 13.516-70.434l3.342-2.388 59.268 74.088a8 8 0 0 0 6.247 3h14.605c9.754 0 17.395-7.906 17.395-18v-158h7.6a12.034 12.034 0 0 1 11.767 9.647l28.46 142.3-11.653 54.38 15.644 3.352 12-56a8.007 8.007 0 0 0 .027-3.248zm-244.472 132.033 12.841-26.256 61.967-17.443-8.909 18.213a52.008 52.008 0 0 1 -65.9 25.486zm100.627 18.836a52.08 52.08 0 0 1 -57.508 13.159l10.638-21.749a67.53 67.53 0 0 0 26.516-28.7l10.587-21.646 9.767 15.9zm-22.722-80.031-230.178 64.796a2 2 0 0 1 -2.468-1.382l-30.595-108.683h235.533q1.188 2.187 2.551 4.315z" />
                                            </g>
                                        </svg>
                                    </div>
                                    <div className="align-self-center service-single-text">
                                        <p>Offer</p>
                                        <p>Coupons</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="exclusive d-none d-md-block">
        <div className="container">
            <div className="owl-carousel exclusive-carousel">
                <div className="exclusive-single es-bg-1">
                    <div className="exclusive-single-content">
                        <h2>Get up to <span>20% OFF</span></h2>
                        <h3>Skin Care Products</h3>
                        <Link to="product-detail.html" className="btn btn-red">Shop Now</Link>
                    </div>
                </div>
                <div className="exclusive-single es-bg-2">
                    <div className="exclusive-single-content">
                        <h2>Get up to <span>30% OFF</span></h2>
                        <h3>Makeup Products</h3>
                        <Link to="product-detail.html" className="btn btn-red">Shop Now</Link>
                    </div>
                </div>
                <div className="exclusive-single es-bg-3">
                    <div className="exclusive-single-content">
                        <h2>Get up to <span>50% OFF</span></h2>
                        <h3>Cosmetic Products</h3>
                        <Link to="product-detail.html" className="btn btn-red">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="trending pt-30">
        <div className="container">
            <div className="common-wrapper">
                <div className="section-title">
                    <h2>Trending products</h2>
                    <Link to="/products" className="btn btn-green-outline">View All</Link>
                </div>
                <div className="owl-carousel product-carousel">
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="/product/1"><img src="/assets/images/products/01.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">10% sale</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Clear glass perfume 200ml</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>$100</del>$90</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/02.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Mobile & Gadgets</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Silver iphone</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$8000</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/03.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">10% sale</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Watches & Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Golden wristwatch</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>$300</del>$200</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/04.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Grocery</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Cherry tomatoes</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$20</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/05.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">20% sale</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Computer & Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Asus Laptop</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>400$</del>$280</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="new-arrival pt-30">
        <div className="container">
            <div className="common-wrapper">
                <div className="section-title">
                    <h2>New arrival</h2>
                    <Link to="products.html" className="btn btn-green-outline">View All</Link>
                </div>
                <div className="owl-carousel product-carousel">
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/06.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-green">New</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">D&G perfume</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$120</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/07.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-green">New</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Watches & Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Wrist Watch</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$500</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/08.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-green">New</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Computer & Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Apple Notebook</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$9000</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/09.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-green">New</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">N's Channel Perfume</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$90</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/10.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-green">New</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Sports Shoe</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price">$150</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="best-sale pt-30">
        <div className="container">
            <div className="common-wrapper">
                <div className="section-title">
                    <h2>Avaible Offer</h2>
                    <Link to="products.html" className="btn btn-green-outline">View All</Link>
                </div>
                <div className="owl-carousel product-carousel">
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/11.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">5% off</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Food & Beverages</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Soft Drinks</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>80$</del>$50</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/12.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">50% off</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Health & Beauty</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Ordinary combo</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>300$</del>$150</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/13.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">15% off</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Venus Mascara</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>100$</del>$90</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="product-detail.html"><img src="/assets/images/products/10.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">25% off</span>
                            <span className="product-badge-right-green">new</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">Sports Shoe</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>320$</del>$150</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <Link to="/product"><img src="/assets/images/products/09.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></Link>
                            <span className="product-badge-red">2% off</span>
                            <span className="product-badge-right-green">new</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><Link to="/" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></Link></li>
                                    <li className="list-inline-item"><Link to="/" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></Link></li>
                                    <li className="list-inline-item"><Link to="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></Link>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <Link to="product-detail.html">
                                <h3 className="product-name">N's Channel Perfume</h3>
                            </Link>
                            <div className="d-flex">
                                <div className="product-price"><del>100$</del>$90</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Home