import React,{useRef} from 'react';
import {SERVER_IMAGES} from '../utils/constants'
import { useSelector,useDispatch } from 'react-redux';
import {useParams} from 'react-router-dom';


function ProductInfoPage () {

    const { id } = useParams();

    let spanRef = useRef('');

    function postLocalStorage () {
        return new Promise((resolve, reject) => {
            try {
                localStorage.setItem('Cart', JSON.stringify(tList));
                resolve();
            } catch (error) {
                reject(error);
            }
        });
    }

    function handleClickQuantityMinus (e) {
        let effect = document.getElementById('qty'); 
        let qty = effect.value; 
        if (!isNaN(qty) && qty > 1) {
            effect.value--;
            document.getElementById('qty').value = effect.value;
            }
        spanRef.current = document.getElementById('qty').value;
        return false;
    }
    
    function handleClickQuantityPlus (e) {
        let effect = document.getElementById('qty'); 
        let qty = effect.value; 
        if(!isNaN(qty)) {
            effect.value++;
        }
        return false;
    }

    const catalogList = useSelector((store)=> store.app.catalogList);
    
    let tList = JSON.parse(localStorage.getItem('Cart')) ? JSON.parse(localStorage.getItem('Cart')) : [];

    let r = {};
    let res = '';
    let res1 = '';
    let res2 = '';
    let res3 = '';
    let res4 = '';

    catalogList.forEach((item) => { 
        if (item.id === id) {
            res = item.id; 
            res1 = item.img_url;
            res2 = item.price;
            res3= item.title;
            res4= document.getElementById('qty').value;
            r = {res,res1,res2,res3,res4};      
        };}
    )
    
    tList.push(r);
    
    
    return (
            <div className="single-product-area section-padding-100 clearfix">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div aria-label="breadcrumb">
                                <ol className="breadcrumb mt-50">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Furniture</a></li>
                                    <li className="breadcrumb-item"><a href="#">Chairs</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">white modern chair</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <img className="d-block w-100" src= {`${ SERVER_IMAGES }${ res1 }`}  alt="First slide"/>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="single_product_desc">
                                <div className="product-meta-data">
                                    <div className="line"></div>
                                    <p className="product-price">{`${ res2 }`}</p>
                                    <a href="product-details.html">
                                        <h6>{`${ res3 }`}</h6>
                                    </a>
                                    <div className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                        <div className="ratings">
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                            <i className="fa fa-star" aria-hidden="true"></i>
                                        </div>
                                        <div className="review">
                                            <a href="#">Write A Review</a>
                                        </div>
                                    </div>
                                    <p className="avaibility"><i className="fa fa-circle"></i> In Stock</p>
                                </div>
                                <div className="short_overview my-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet culpa officia 
                                    quidem mollitia impedit iste asperiores nisi reprehenderit consequatur, autem, nostrum pariatur enim?</p>
                                </div>
                                <form className="cart clearfix" method="post">
                                    <div className="cart-btn d-flex mb-50">
                                        <p>Qty</p>
                                        <div className="quantity">
                                            <span className="qty-minus"  onClick={handleClickQuantityMinus}><i className="fa fa-caret-down" aria-hidden="true"></i></span>
                                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="300" name="quantity"  defaultValue="15"/>
                                            <span className="qty-plus" onClick={handleClickQuantityPlus}><i className="fa fa-caret-up" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                    <button type="button" name="addtocart" value="5" onClick={postLocalStorage} className="btn amado-btn">Add to cart</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default ProductInfoPage;