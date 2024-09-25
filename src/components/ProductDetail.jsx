import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

const sinproduct = {
    id: 1,
    image: '/assets/images/products/02.jpg',
    images: [
      '/assets/images/products/02.jpg',
      '/assets/images/products/14.jpg',
       '/assets/images/products/15.jpg'
    ],
    brand: 'Apple',
    category: "Fashion Accessories",
    code: 'CW 018',
    inStock: 1,
    rating: 3,
    reviews: 0,
    originalPrice: 100,
    price: 90,
    colors: [
      'red'
    ],
    sizes: [
        'small','medium'
      ]
  };
const ProductDetail = () => {
    const { id } = useParams(); // Extract product ID from the URL
  const location = useLocation();
  const [product, setProduct] = useState(null); // State to hold a single product
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://ai-salesman.com/products/${id}`); // Fetch single product based on ID
        setProduct(response.data); // Assuming response data contains the product
      } catch (err) {
        setError('Failed to load product.'); // Handle errors appropriately
      } finally {
        setLoading(false); // Set loading to false after request completion
      }
    };

    // Check if location.state has the product data
    if (location.state && location.state.product) {
      setProduct(location.state.product); // Use product from location.state
    } else {
        // fetchProduct(); // Fetch product from backend if not available in state
        setProduct(sinproduct);
    }
    setLoading(false); // Set loading to false as we already have product data
  }, [location.state, id]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message if any
  }

  if (!product) {
    return <div>No product found.</div>; // Handle case where product is not found
  }

  const changeImg = (img) => {
    const mainImg = document.querySelector('.main-img');
    mainImg.src = img.currentSrc; // Change main image source on thumbnail click
  };

  return (
    <>
    {/* <my-preloader></my-preloader> */}
    <section className="navigation-bar">
        <div className="container">
            <Navbar/>
        </div>
    </section>
    <section className="product-detail pt-30">
      <div className="container">
        <div className="common-wrapper">
          <div className="row">
            <div className="col-md-5 col-xl-4">
              <div className="single-product-img">
                <img
                  src={product.image}
                  className="img-fluid img-thumbnail main-img"
                  alt={product.name}
                />
                <ul className="list-inline text-center thumb_img">
                  {product.images.map((img, index) => (
                    <li key={index} className="list-inline-item" onClick={() => changeImg({ currentSrc: img.img })}>
                      <img
                        src={img}
                        className="img-fluid img-thumbnail"
                        alt={`${product.name} thumbnail ${index + 1}`}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-md-7 col-xl-8">
              <div className="single-product-info">
                <h3 className="about-title">{product.name}</h3>
                <table className="table-sm table-borderless mt-3">
                  <tbody>
                    <tr>
                      <th>Brands</th>
                      <td>{product.brand}</td>
                    </tr>
                    <tr>
                      <th>Product Code</th>
                      <td>{product.code}</td>
                    </tr>
                    <tr>
                      <th>Availability</th>
                      <td className={product.inStock ? "text-success" : "text-danger"}>
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="list-inline ratelist mt-3">
                  <li className="list-inline-item">
                    {Array.from({ length: product.rating }).map((_, index) => (
                      <i key={index} className="fas fa-star text-warning"></i>
                    ))}
                    {Array.from({ length: 5 - product.rating }).map((_, index) => (
                      <i key={index} className="far fa-star text-warning"></i>
                    ))}
                  </li>
                  <li className="list-inline-item"><a href="#">({product.reviews} Review)</a></li>
                </ul>
                <hr />
                <div className="product-price mb-3">
                  <del>${product.originalPrice}</del> ${product.price}
                </div>
                <div className="product-quantity">
                  <h6>Product Quantity:</h6>
                  <ul className="list-inline mt-3">
                    <li className="list-inline-item">
                      <input
                        type="number"
                        className="form-control"
                        min="1"
                        max="999"
                        defaultValue="1"
                      />
                    </li>
                    <li className="list-inline-item">
                      <select className="form-select">
                        <option>Select size</option>
                        {product.sizes.map((size, index) => (
                          <option key={index} value={size}>{size}</option>
                        ))}
                      </select>
                    </li>
                    <li className="list-inline-item">
                      <select className="form-select">
                        <option>Select color</option>
                        {product.colors.map((color, index) => (
                          <option key={index} value={color}>{color}</option>
                        ))}
                      </select>
                    </li>
                    <li className="list-inline-item mt-2">
                      <button type="button" className="btn btn-green addto_cart">
                        <i className="fas fa-shopping-basket me-xl-2"></i>
                        <span>Add to Cart</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="review-part pt-30">
        <div className="container">
            <div className="common-wrapper">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#spec" type="button"
                            role="tab">Specification</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" data-bs-toggle="tab" data-bs-target="#review" type="button"
                            role="tab">Reviews</button>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane show active" id="spec">
                        <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Tempora, ratione autem numquam
                            fugiat corporis quidem neque, error quia labore, laborum sint qui ab? Omnis molestias esse a
                            numquam voluptates cumque quia, reprehenderit, blanditiis eos, dolores magnam nam officia
                            accusamus modi nostrum id officiis non harum necessitatibus provident optio sit. Rem.</p>
                    </div>
                    <div className="tab-pane" id="review">
                        <p className="text-muted mb-3">There are no reviews for this product</p>
                        <h5 className="mb-3">Leave Your Review</h5>
                        <form action="#" method="post">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" placeholder="Your Name" required/>
                                        <label>Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating mb-3">
                                        <input type="email" className="form-control" placeholder="Your Email" required/>
                                        <label>Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Your Review" rows="5"></textarea>
                                        <label>Your Review</label>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3">
                                    <ul className="list-inline star-rating">
                                        <li className="list-inline-item"><i className="fas fa-star text-warning"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                                        <li className="list-inline-item"><i className="fas fa-star"></i></li>
                                    </ul>
                                </div>
                                <div className="col-md-12">
                                    <button type="submit" className="btn btn-green">Submit</button>
                                </div>
                            </div>
                        </form>
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
                    <a href="products.html" className="btn btn-green-outline">View All</a>
                </div>
                <div className="owl-carousel product-carousel">
                    <div className="card product-single">
                        <figure className="product-img">
                            <a href="product-detail.html"><img src="/assets/images/products/01.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></a>
                            <span className="product-badge-red">10% sale</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></a></li>
                                    <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Fashion Accessories</p>
                            <a href="product-detail.html">
                                <h3 className="product-name">Clear glass perfume 200ml</h3>
                            </a>
                            <div className="d-flex">
                                <div className="product-price"><del>$100</del>$90</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <a href="product-detail.html"><img src="/assets/images/products/02.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></a>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></a></li>
                                    <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Mobile & Gadgets</p>
                            <a href="product-detail.html">
                                <h3 className="product-name">Silver iphone</h3>
                            </a>
                            <div className="d-flex">
                                <div className="product-price">$8000</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <a href="product-detail.html"><img src="/assets/images/products/03.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></a>
                            <span className="product-badge-red">10% sale</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></a></li>
                                    <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Watches & Accessories</p>
                            <a href="product-detail.html">
                                <h3 className="product-name">Golden wristwatch</h3>
                            </a>
                            <div className="d-flex">
                                <div className="product-price"><del>$300</del>$200</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <a href="product-detail.html"><img src="/assets/images/products/04.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></a>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></a></li>
                                    <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Grocery</p>
                            <a href="product-detail.html">
                                <h3 className="product-name">Cherry tomatoes</h3>
                            </a>
                            <div className="d-flex">
                                <div className="product-price">$20</div>
                                <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card product-single">
                        <figure className="product-img">
                            <a href="product-detail.html"><img src="/assets/images/products/05.jpg" className="img-fluid"
                                    alt="AlgoBazar"/></a>
                            <span className="product-badge-red">20% sale</span>
                            <div className="product-overlay">
                                <ul className="list-inline">
                                    <li className="list-inline-item"><a href="#" title="Add to Basket"><i
                                                className="bi bi-cart-plus-fill"></i></a></li>
                                    <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i
                                                className="fas fa-heart"></i></a></li>
                                    <li className="list-inline-item"><a href="product-detail.html" title="View"><i
                                                className="fas fa-eye"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </figure>
                        <div className="card-body">
                            <p className="product-info">Computer & Accessories</p>
                            <a href="product-detail.html">
                                <h3 className="product-name">Asus Laptop</h3>
                            </a>
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
    </>
  )
}

export default ProductDetail