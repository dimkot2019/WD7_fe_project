import React from 'react';
import ProductsOfCart from '../components/catalogelement/productsOfCart';
import { useSelector } from 'react-redux';


function CartPage(props) {

    const catalogList = useSelector((store)=> store.app.catalogList); 

    let tL = [];

    tL.push(catalogList[0]) ;

    let data = JSON.parse(localStorage.getItem('Cart'));

    if (!isNaN(data)) {
        data = tL;
        localStorage.setItem('Cart', JSON.stringify(tL)); 
    } 
    

    return (
                <div className="cart-table-area section-padding-100">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="cart-title mt-50">
                                    <h2>Shopping Cart</h2>
                                </div>
                                <div className="cart-table clearfix">
                                    <table className="table table-responsive">
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            {
                                                data.map((item)=> <ProductsOfCart
                                                    res1={item.res1}
                                                    res2={item.res2}
                                                    res3={item.res3}
                                                /> )
                                            }
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="cart-summary">
                                    <h5>Cart Total</h5>
                                    <ul className="summary-table">
                                        <li><span>subtotal:</span> <span>$140.00</span></li>
                                        <li><span>delivery:</span> <span>Free</span></li>
                                        <li><span>total:</span> <span>$140.00</span></li>
                                    </ul>
                                    <div className="cart-btn mt-100">
                                        <a href="cart.html" className="btn amado-btn w-100">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
    )
}

export default CartPage;