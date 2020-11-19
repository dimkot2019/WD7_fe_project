import React from 'react';
import {SERVER_IMAGES} from '../../utils/constants'


function ProductsOfCart (props) {
    const { res1, res2, res3 } = props

    function handleClickQuantityMinus3 () {
        let effect = document.getElementById('qty3'); 
        let qty = effect.value; 
        if( !isNaN( qty ) && qty > 1 ) {
            effect.value--;
            }
        return false;
    }
    
    function handleClickQuantityPlus3 () {
        let effect = document.getElementById('qty3'); 
        let qty = effect.value; 
        if( !isNaN( qty ) ) {
            effect.value++;
        }
        return false;
    }

    return (
            <tr>
                <td className="cart_product_img">
                    <a href="#"><img src={`${ SERVER_IMAGES }${ res1 }`} alt="Вы ничего не выбрали!"/></a>
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
                            <span className="qty-minus" onClick={handleClickQuantityMinus3}><i className="fa fa-minus" aria-hidden="true"></i></span>
                            <input type="number" className="qty-text" id="qty3" step="1" min="1" max="300" name="quantity" value="1"/>
                            <span className="qty-plus" onClick={handleClickQuantityPlus3}><i className="fa fa-plus" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </td>
            </tr> 
    )
    
}

export default React.memo(ProductsOfCart);