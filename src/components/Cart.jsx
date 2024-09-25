import React from 'react'
import Navbar from './Navbar'
import Header from './Header'

const Cart = () => {
  return (
    <>
    {/* <my-preloader></my-preloader> */}
    <section className="navigation-bar">
        <div className="container">
            <Navbar/>
        </div>
    </section>
    <section className="cart pt-30">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-lg-8 col-xxl-9">
                    <div className="common-wrapper mycart-table">
                        <h2 className="about-title">My Cart</h2>
                        <div className="table-responsive mt-4">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <img src="assets/images/products/01.jpg" className="img-fluid" alt="Algobazar"/>
                                        </td>
                                        <td>Clear glass perfume 200ml</td>
                                        <td><input type="number" className="form-control form-control-sm" value="1"/></td>
                                        <td>200$</td>
                                        <td><i className="far fa-trash-alt text-danger" title="Delete"></i></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <img src="assets/images/products/02.jpg" className="img-fluid" alt="Algobazar"/>
                                        </td>
                                        <td>Clear glass perfume 200ml</td>
                                        <td><input type="number" className="form-control form-control-sm" value="1"/></td>
                                        <td>200$</td>
                                        <td><i className="far fa-trash-alt text-danger" title="Delete"></i></td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="4" className="text-end">Total</th>
                                        <td>200$</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div className="text-md-end text-center mt-4">
                            <a href="#" className="btn btn-green me-2 mb-2 mb-sm-0">Update Cart</a>
                            <a href="checkout.html" className="btn btn-green-outline mb-2 mb-sm-0">Checkout</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-5 col-lg-4 col-xxl-3">
                    <div className="card cart-total">
                        <h2 className="card-title">Cart Total</h2>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th>Subtotal</th>
                                            <td>200$</td>
                                        </tr>
                                        <tr>
                                            <th>Shipping</th>
                                            <td>20$</td>
                                        </tr>
                                        <tr>
                                            <th>Total</th>
                                            <td>180$</td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th>Payable Total</th>
                                            <td>180$</td>
                                        </tr>
                                    </tfoot>
                                </table>
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

export default Cart