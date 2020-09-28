import React from 'react';
import testImage1 from '../../assets/product/product1.jpg';
import testImage2 from '../../assets/product/product2.jpg';
import testImage3 from '../../assets/core-img/cart.png';
import {SERVER_IMAGES} from '../../utils/constants'


function OneItem (props) {
    const {price, title, img_url} = props
    return (
        <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                        <div className="single-product-wrapper">
                            <div className="product-img">
                                <img src= {`${SERVER_IMAGES}${img_url}`} alt="" />
                                <img className="hover-img" src={testImage2} alt="" />
                            </div>
                            <div className="product-description d-flex align-items-center justify-content-between">
                                <div className="product-meta-data">
                                    <div className="line"></div>
                                    <p className="product-price">${price}</p>
                                    <a href="product-details.html">
                                        <h6>{title}</h6>
                                    </a>
                                </div>
                                <div className="ratings-cart text-right">
                                    <div className="ratings">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className="cart">
                                        <a href="cart.html" data-toggle="tooltip" data-placement="left" title="" data-original-title="Add to Cart">
                                            <img src={testImage3} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    )
}

export default React.memo(OneItem );