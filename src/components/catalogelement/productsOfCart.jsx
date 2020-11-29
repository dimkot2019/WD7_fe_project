import React from 'react';
import {SERVER_IMAGES} from '../../utils/constants'


function ProductsOfCart (props) {

    const { res1, res2, res3, res4 } = props


    return (
            <tr>
                <td className="cart_product_img">
                    <a href="#"><img src={`${ SERVER_IMAGES }${ res1 }`} alt=""/></a>
                </td>
                <td className="cart_product_desc">
                    <h5>{res3}</h5>
                </td>
                <td className="price">
                    <span>{res2}</span>
                </td>
                <td className="qty">
                    <div className="qty-btn d-flex">
                        <p>Qty</p>
                        <div className="quantity">
                            <input type="number" className="qty-text" id="qty3" step="1" min="1" max="300" name="quantity" value={res4}/>
                        </div>
                    </div>
                </td>
            </tr> 
    ) 
}

export default React.memo(ProductsOfCart);