import React from 'react'
import Navbar from './Navbar'

const Categories = () => {
  return (
    <>
    <section className="navigation-bar">
        <div className="container">
            <Navbar/>
        </div>
    </section>
    <section className="categories-page pt-30">
        <div className="container">
            <div className="common-wrapper">
                <h2 className="about-title">All Categories</h2>
                <div className="row">
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/01.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Mobile & Gadgets</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/02.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Computer & Accessories</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/03.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Watches & Accessories</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/04.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Home Appliances</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/05.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Sports Accessories</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/06.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Food & Beverages</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/07.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Fashion Accessories</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/08.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Grocery</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/09.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Water & Drinks</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/10.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Snacks</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/11.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Frozen & Canned</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-xl-2">
                        <div className="card categories-single">
                            <figure><a href="categories-detail.html"><img src="assets/images/category/12.jpg" className="card-img-top" alt="Algobazar"/></a></figure>
                            <div className="card-body text-center">
                                <h3 className="product-name">Candy & Chocolate</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="loadmore-btn"><a href="#" className="btn btn-green">Load More</a></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Categories