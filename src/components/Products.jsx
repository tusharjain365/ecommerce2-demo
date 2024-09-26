import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

const statproducts = [
    {
        id: 1,
        name: "Clear glass perfume 200ml",
        category: "Fashion Accessories",
        price: 90,
        originalPrice: 100,
        sale: 10,
        image: "assets/images/products/01.jpg",
    },
    {
        id: 2,
        name: "Clear glass perfume 200ml",
        category: "Fashion Accessories",
        price: 90,
        originalPrice: 100,
        sale: 10,
        image: "assets/images/products/02.jpg",
    },
    {
        id: 3,
        name: "Clear glass perfume 200ml",
        category: "Fashion Accessories",
        price: 90,
        originalPrice: 100,
        sale: 10,
        image: "assets/images/products/03.jpg",
    },
    {
        id: 4,
        name: "Clear glass perfume 200ml",
        category: "Fashion Accessories",
        price: 90,
        originalPrice: 100,
        sale: 10,
        image: "assets/images/products/04.jpg",
    },
    {
        id: 5,
        name: "Clear glass perfume 200ml",
        category: "Fashion Accessories",
        price: 90,
        originalPrice: 100,
        sale: 10,
        image: "assets/images/products/05.jpg",
    },
];

const Products = () => {

    const location = useLocation();
  const [products, setProducts] = useState([]); // State to hold products
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchProducts = async () => {
        console.log('this is products');
        setLoading(true);
      try {
        const response = await axios.get('/products'); // Adjust the API endpoint if needed
        console.log(response);
        setProducts(response.data); // Assuming response data contains the products array
      } catch (err) {
        setError('Failed to load products.'); // Handle errors appropriately
      } finally {
        setLoading(false); // Set loading to false after request completion
      }
    };

    // Check if location.state is empty
    if (location.state && location.state.componentData && location.state.componentData.products) {
      setProducts(location.state.componentData.products); // Use products from location.state
    } else {
        fetchProducts(); // Fetch products from backend
        // setProducts(statproducts);
    }
    setLoading(false); // Set loading to false as we already have products
  }, [location.state]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>{error}</div>; // Display error message if any
  }


    return (
        <>
            {/* <my-preloader></my-preloader> */}
            <section className="navigation-bar">
                <div className="container">
                    <Navbar />
                </div>
            </section>
            <section className="product-list pt-30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 order-1 order-lg-0">
                            <div className="card product-list-filter">
                                <h4 className="card-title text-start">Filter by Category</h4>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat1" />
                                                <label className="form-check-label" for="cat1">Watches &amp;
                                                    Accessories<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat2" />
                                                <label className="form-check-label" for="cat2">Home &
                                                    Lifestyle<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat3" />
                                                <label className="form-check-label" for="cat3">Groceries &
                                                    Pets<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat4" />
                                                <label className="form-check-label" for="cat4">Babies & Toys<span>(1)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat5" />
                                                <label className="form-check-label" for="cat5">Health &
                                                    Beauty<span>(2)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat6" />
                                                <label className="form-check-label" for="cat6">TV & Home
                                                    Appliances<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat7" />
                                                <label className="form-check-label" for="cat7">Electronic
                                                    Accessories<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="cat8" />
                                                <label className="form-check-label" for="cat8">Electronic
                                                    Devices<span>(5)</span></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card product-list-filter">
                                <h4 className="card-title text-start">Filter by Brand</h4>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="brand1" />
                                                <label className="form-check-label" for="brand1">Singer<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="brand2" />
                                                <label className="form-check-label" for="brand2">Huawei<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="brand3" />
                                                <label className="form-check-label" for="brand3">Xiaomi<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="brand4" />
                                                <label className="form-check-label" for="brand4">Samsung<span>(1)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="brand5" />
                                                <label className="form-check-label" for="brand5">Realme<span>(2)</span></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card product-list-filter">
                                <h4 className="card-title text-start">Select by Size</h4>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="size1" />
                                                <label className="form-check-label" for="size1">L<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="size2" />
                                                <label className="form-check-label" for="size2">M<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="size3" />
                                                <label className="form-check-label" for="size3">XXL<span>(3)</span></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card product-list-filter">
                                <h4 className="card-title text-start">Select by Color</h4>
                                <div className="card-body">
                                    <ul className="list-unstyled">
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="color1" />
                                                <label className="form-check-label" for="color1">Red<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="color2" />
                                                <label className="form-check-label" for="color2">Green<span>(3)</span></label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="color3" />
                                                <label className="form-check-label" for="color3">Blue<span>(3)</span></label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 order-0 order-lg-1 all-products">
                            <div className="d-md-flex text-center text-md-start justify-content-between product-filter">
                                <div className="flex-fill align-self-center">
                                    <p>Showing <span className="to">{products.length}</span> results</p>
                                </div>
                                <div className="align-self-center">
                                    <select className="form-select form-select-sm">
                                        <option>Sort by new item</option>
                                        <option>Sort by old item</option>
                                        <option>Sort by best selling</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                {products.map(product => (
                                    <div className="col-md-4" key={product?.id}>
                                        <div className="card product-single">
                                            <figure className="product-img">
                                                <Link to={`/product/${product.id}`}><img src={product?.image} className="img-fluid" alt="AlgoBazar" /></Link>
                                                {/* {product && product.sale !== 0 && <span className="product-badge-red">{product.sale}% sale</span>} */}
                                                <div className="product-overlay">
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                                        <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                                        <li className="list-inline-item"><Link to={`/product/${product.id}`} title="View"><i className="fas fa-eye"></i></Link></li>
                                                    </ul>
                                                </div>
                                            </figure>
                                            <div className="card-body">
                                                <p className="product-info">{product?.category}</p>
                                                <Link to={`/product/${product?.id}`}>
                                                    <h3 className="product-name">{product?.title}</h3>
                                                </Link>
                                                <div className="d-flex">
                                                    <div className="product-price"><del>${product?.originalPrice}</del>${product?.price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/02.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-brown">Stockout</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
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
                        </div> */}
                                {/* 
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/03.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-red">10% sale</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
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
                        </div>
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/10.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-right-red">25% off</span>
                                    <span className="product-badge-brown">Stockout</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <p className="product-info">Fashion Accessories</p>
                                    <a href="product-detail.html">
                                        <h3 className="product-name">Sports Shoe</h3>
                                    </a>
                                    <div className="d-flex">
                                        <div className="product-price"><del>320$</del>$150</div>
                                        <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/06.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-green">New</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <p className="product-info">Fashion Accessories</p>
                                    <a href="product-detail.html">
                                        <h3 className="product-name">D&G perfume</h3>
                                    </a>
                                    <div className="d-flex">
                                        <div className="product-price">$120</div>
                                        <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/07.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-right-green">New</span>
                                    <span className="product-badge-brown">Stockout</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <p className="product-info">Watches & Accessories</p>
                                    <a href="product-detail.html">
                                        <h3 className="product-name">Wrist Watch</h3>
                                    </a>
                                    <div className="d-flex">
                                        <div className="product-price">$500</div>
                                        <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/08.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-green">New</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <p className="product-info">Computer & Accessories</p>
                                    <a href="product-detail.html">
                                        <h3 className="product-name">Apple Notebook</h3>
                                    </a>
                                    <div className="d-flex">
                                        <div className="product-price">$9000</div>
                                        <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/11.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-red">5% off</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <p className="product-info">Food & Beverages</p>
                                    <a href="product-detail.html">
                                        <h3 className="product-name">Soft Drinks</h3>
                                    </a>
                                    <div className="d-flex">
                                        <div className="product-price"><del>80$</del>$50</div>
                                        <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card product-single">
                                <figure className="product-img">
                                    <a href="product-detail.html"><img src="assets/images/products/12.jpg" className="img-fluid" alt="AlgoBazar"/></a>
                                    <span className="product-badge-red">5% off</span>
                                    <div className="product-overlay">
                                        <ul className="list-inline">
                                            <li className="list-inline-item"><a href="#" title="Add to Basket"><i className="bi bi-cart-plus-fill"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="Add to Wishlist"><i className="fas fa-heart"></i></a></li>
                                            <li className="list-inline-item"><a href="#" title="View"><i className="fas fa-eye"></i></a></li>
                                        </ul>
                                    </div>
                                </figure>
                                <div className="card-body">
                                    <p className="product-info">Fashion Accessories</p>
                                    <a href="product-detail.html">
                                        <h3 className="product-name">Ordinary Combo</h3>
                                    </a>
                                    <div className="d-flex">
                                        <div className="product-price"><del>80$</del>$70</div>
                                        <div className="product-rating ms-auto"><i className="fas fa-star"></i> <span>(0)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            </div>
                            {/* <ul className="pagination">
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products