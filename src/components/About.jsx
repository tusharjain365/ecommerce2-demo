import React from 'react'
import Navbar from './Navbar'

const About = () => {
  return (
    <>
    <section className="navigation-bar">
        <div className="container">
            <Navbar/>
        </div>
    </section>
    <section className="about-us pt-30">
        <div className="container">
            <div className="common-wrapper">
                <div className="about-us-content">
                    <h2 className="about-title">About Us</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium dicta, recusandae assumenda, necessitatibus, tempora, quas dolores quae quasi eligendi cupiditate molestias aspernatur asperiores? Quia, unde! Non, eos, voluptatum! Rerum incidunt, numquam fugit! Repudiandae dolore aliquid culpa molestiae recusandae saepe.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur, adipisicing elit. Aliquam atque impedit possimus veritatis quam animi exercitationem sint, ipsa laboriosam aliquid reiciendis expedita quaerat officia iste voluptate, optio deserunt est facilis soluta ea rerum repudiandae pariatur cum. Velit, quaerat, eaque maiores unde nesciunt optio eos, hic voluptatum explicabo aliquid ratione illo?</p>
                </div>
                <div className="our-value">
                    <h3 className="about-title">Our Values</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="d-flex our-value-single">
                                <div className="me-3"><img src="assets/images/icons/exchange.png" className="img-fluid" alt="Algobazar"/></div>
                                <div>
                                    <h4>Embrace Change</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati id fugiat provident omnis neque, quisquam.</p>
                                </div>
                            </div>
                            <div className="d-flex our-value-single">
                                <div className="me-3"><img src="assets/images/icons/team.png" className="img-fluid" alt="Algobazar"/></div>
                                <div>
                                    <h4>Teamwork</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati id fugiat provident omnis neque, quisquam.</p>
                                </div>
                            </div>
                            <div className="d-flex our-value-single">
                                <div className="me-3"><img src="assets/images/icons/handshake.png" className="img-fluid" alt="Algobazar"/></div>
                                <div>
                                    <h4>Customer Commitment</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati id fugiat provident omnis neque, quisquam.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="d-flex our-value-single">
                                <div className="me-3"><img src="assets/images/icons/discount.png" className="img-fluid" alt="Algobazar"/></div>
                                <div>
                                    <h4>Biggest Variety</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati id fugiat provident omnis neque, quisquam.</p>
                                </div>
                            </div>
                            <div className="d-flex our-value-single">
                                <div className="me-3"><img src="assets/images/icons/price-tag.png" className="img-fluid" alt="Algobazar"/></div>
                                <div>
                                    <h4>Best Prices</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati id fugiat provident omnis neque, quisquam.</p>
                                </div>
                            </div>
                            <div className="d-flex our-value-single">
                                <div className="me-3"><img src="assets/images/icons/shield.png" className="img-fluid" alt="Algobazar"/></div>
                                <div>
                                    <h4>100% Protected</h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur, adipisicing elit. Doloribus obcaecati id fugiat provident omnis neque, quisquam.</p>
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

export default About