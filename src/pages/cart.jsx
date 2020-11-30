import React from 'react';
import ProductsOfCart from '../components/catalogelement/productsOfCart';

function SubTotal(key) {
    let data = JSON.parse(localStorage.getItem(key)) || [];
    if (data.length === 0) {
        return 0;
    }
    if (data.length === 1) {
        return data[0].res5;
    }
    if (data.length > 1) {
        return data.reduce(function(prev,current) {return prev.res5 + current.res5;});
    }
}


function CartPage () {

    let data = JSON.parse(localStorage.getItem('Cart')) || [];

    let subTotal = SubTotal('Cart');

    
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
                                            { data.length === 0 && 'Вы ничего не выбрали' }
                                            {
                                                data.map((item)=> <ProductsOfCart
                                                    res1={item.res1}
                                                    res2={item.res2}
                                                    res3={item.res3}
                                                    res4={item.res4}
                                                    res5={item.res5}
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
                                        <li><span>subtotal:</span> <span>${`${subTotal}`}</span></li>
                                        <li><span>delivery:</span> <span>Free</span></li>
                                        <li><span>total:</span> <span>${`${subTotal}`}</span></li>
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